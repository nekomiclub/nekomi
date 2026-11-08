import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPodium: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M469.5-740.5Q449-720 420-720q-13 0-24.5-4.5T374-737q-27 16-45 41t-19 56h530l-40 280H626v-60h125q6-40 11.5-80t11.5-80H186q6 40 11.5 80t11.5 80h125v60H160l-40-280h130q1-49 28.5-89t71.5-63q1-29 21-48.5t49-19.5 49.5 20.5T490-790t-20.5 49.5M374-180h212l28-280H346zm-54 60-33-334q-2-26 16-46t44-20h266q26 0 44 20t16 46l-33 334z" /></svg>;
export default MaterialPodium;