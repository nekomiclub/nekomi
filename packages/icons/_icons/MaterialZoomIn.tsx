import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialZoomIn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M796-121 533-384q-30 26-69.96 40.5T378-329q-108.16 0-183.08-75T120-585t75-181 181.5-75 181 75T632-584.85Q632-542 618-502t-42 75l264 262zM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5T180-585t57.46 138.5T377-389m-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82z" /></svg>;
export default MaterialZoomIn;