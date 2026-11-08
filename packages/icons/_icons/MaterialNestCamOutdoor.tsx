import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestCamOutdoor: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M576-189q-22 26-54.5 29.5T463-178L294-319q-26-21-45-48t-31-58q-11 12-26 18.5t-32 6.5H80v-320h80q29 0 51.5 18t27.5 47q38-58 98-91.5T466-780q45 0 85.5 16t74.5 45l170 141q26 21 28.5 53.5T806-466zM260-518q0 45 19 84t53 68l185 154 255-307-184-154q-26.76-22.93-59.1-34.96Q496.57-720 462-720q-84 0-142.45 58.68T260-518m256 52" /></svg>;
export default MaterialNestCamOutdoor;