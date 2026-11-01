'use server';

import { cookies } from 'next/headers';

import conf, { IsProduction } from '~/conf';
import { getCachedUser } from '~/shared/lib/cached-api';

import API from './api';
import { AUTH_METHOD_ENUM, ROLE_PERMISSION_ENUM } from './api/api-types';




/** Set authorization cookie with session token */
export async function setAuthorizationCookie(token: string) {
  const cookie = await cookies();

  cookie.set({
    name: conf.vars.authorization_cookie_name,
    value: btoa(token),
    httpOnly: true,
    secure: IsProduction,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 28, // 4 weeks
    path: '/',
  });
}



/** Remove authorization cookie */
export async function removeAuthorizationCookie() {
  const cookie = await cookies();

  cookie.delete(conf.vars.authorization_cookie_name);
}



/** Get authorization token from cookies */
export async function getAuthorizationToken() {
  const cookie = await cookies();
  const token = cookie.get(conf.vars.authorization_cookie_name);

  if (!token?.value) return null;

  return atob(token.value);
}



/** Authorize user with google token & set cookie */
export async function InvokeGoogleSignin(token: string) {
  const authRes = await API.Auth.postAuth({
    body: {
      method: AUTH_METHOD_ENUM['provider:google'],
      token
    }
  });
  if (!authRes.success) return authRes;

  await setAuthorizationCookie(authRes.response.data.token);

  return authRes;
}



/** Logout user & remove cookie */
export async function InvokeClientLogout(sessionId?: string) {
  await removeAuthorizationCookie();

  if (sessionId) {
    return await API.Auth.getLogoutSession({ params: { sessionId } });;
  } else {
    return await API.Auth.getLogout({});
  }
}



/** Requires user to have any of required permissions */
export async function hasAnyPermission(requiredPermissions: ROLE_PERMISSION_ENUM[]): Promise<boolean> {
  const userRes = await getCachedUser(undefined, true);
  if (!userRes.success) return false;

  return requiredPermissions.some(permission => userRes.response.data.user_permissions!.permissions.includes(permission));
}



/** Requires user to have each required permissions */
export async function hasAllPermissions(requiredPermissions: ROLE_PERMISSION_ENUM[]): Promise<boolean> {
  const userRes = await getCachedUser(undefined, true);
  if (!userRes.success) return false;

  return requiredPermissions.every(permission => userRes.response.data.user_permissions!.permissions.includes(permission));
}