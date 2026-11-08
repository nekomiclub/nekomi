import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M778.5-538.5Q770-547 770-560t8.5-21.5T800-590t21.5 8.5T830-560t-8.5 21.5T800-530t-21.5-8.5M770-650v-180h60v180zM252-523q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.5-46.5T360-420t118 13.5T611-360q33 15 51 43t18 63v94z" /></svg>;
export default MaterialPersonAlertFill;