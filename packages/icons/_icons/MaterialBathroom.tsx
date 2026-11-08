import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBathroom: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M380.5-255.5Q392-267 392-283t-11.5-27.5T353-322t-27.5 11.5T314-283t11.5 27.5T353-244t27.5-11.5m127 0Q519-267 519-283t-11.5-27.5T480-322t-27.5 11.5T441-283t11.5 27.5T480-244t27.5-11.5m127 0Q646-267 646-283t-11.5-27.5T607-322t-27.5 11.5T568-283t11.5 27.5T607-244t27.5-11.5m-254-126Q392-393 392-409t-11.5-27.5T353-448t-27.5 11.5T314-409t11.5 27.5T353-370t27.5-11.5m127 0Q519-393 519-409t-11.5-27.5T480-448t-27.5 11.5T441-409t11.5 27.5T480-370t27.5-11.5m127 0Q646-393 646-409t-11.5-27.5T607-448t-27.5 11.5T568-409t11.5 27.5T607-370t27.5-11.5M280-496h400v-26q0-85-57.5-142.5T480-722t-142.5 57.5T280-522zm50-50q8-57 51.5-91.5T480-672t98.5 34.5T630-546zM140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h680v-680H140zm0 0v-680z" /></svg>;
export default MaterialBathroom;