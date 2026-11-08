import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-400v-130H600v-60h130v-130h60v130h130v60H790v130zM252-523q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.5-46.5T360-420t118 13.5T611-360q33 15 51 43t18 63v94z" /></svg>;
export default MaterialPersonAddFill;