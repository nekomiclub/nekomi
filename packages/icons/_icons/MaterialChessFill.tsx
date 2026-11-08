import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-180q0-25 17.5-42.5T180-320h72l24-170H170v-60h620v60H684l24 170h72q25 0 42.5 17.5T840-260v180zm140-530-60-270q31 30 68 46.5t75 16.5q37 0 71.5-16t65.5-47q31 31 65.5 47t71.5 16 74.5-16.5T760-880l-60 270z" /></svg>;
export default MaterialChessFill;