import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import UserLayout from '~/shared/components/UserLayout';
import { TTeamMemberExtended, TUser } from '~/shared/lib/api/api-types';
import { hasAnyPermission } from '~/shared/lib/auth-lib';
import { getCachedTeam, getCachedUser } from '~/shared/lib/cached-api';
import { IRSCProps,ITeamSettingsPageParams  } from '~/shared/types/PagesParams';
import { HandleMetadataNormalizedError, HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/utils/site-metadata';

import TSettingsPage from './TSettingsPage';



type PagePropsType = IRSCProps<ITeamSettingsPageParams>



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(props: PagePropsType): Promise<Metadata> {
  const { slug } = await props.params;

  const teamRes = await getCachedTeam(slug);
  if (!teamRes.success) return HandleMetadataNormalizedError(teamRes.error);

  const userRes = await getCachedUser(undefined, true);
  if (!userRes.success) return HandleMetadataNormalizedError(userRes.error);

  await checkRSCPermissions(teamRes.response.data.team_members!, userRes.response.data.user);



  return siteMetadata({
    title: `Налаштування команди "${teamRes.response.data.team.name}"`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function TeamSettingsRSC(props: PagePropsType) {
  const { slug } = await props.params;

  const teamRes = await getCachedTeam(slug);
  if (!teamRes.success) return HandleServerNormalizedError(teamRes.error);

  const team = teamRes.response.data.team;
  const members = teamRes.response.data.team_members!;

  const userRes = await getCachedUser(undefined, true);
  if (!userRes.success) return HandleServerNormalizedError(userRes.error);

  await checkRSCPermissions(members, userRes.response.data.user);



  return <>
    <UserLayout type="dubber_settings" dubber={team} />

    <section className="wrapper gap-[40px] pt-[24px] relative">
      <TSettingsPage dubber={team} members={members} />
    </section>
  </>;
}



/**
 * Check permissions.
 * 
 * @throws notFound is user is not permitted
 */
async function checkRSCPermissions(teamMembers: TTeamMemberExtended[], user: TUser) {
  // Skip permissions checks if user is root or admin
  if (!await hasAnyPermission(['sys:absolute'])) {
    const member = teamMembers.find(el => el.id === user.id);
    if (!member || member.role !== 'leader') return notFound(); // Throw not found if user is not permitted
  }
}