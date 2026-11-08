import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIdentityAwareProxy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm0-660v-60h720v60zm0 165v-60h60v60zm660 0v-60h60v60zM120-285v-60h60v60zm660 0v-60h60v60zm-450 0v-165H120v-60h210v-165h300v165h210v60H630v165z" /></svg>;
export default MaterialIdentityAwareProxy;