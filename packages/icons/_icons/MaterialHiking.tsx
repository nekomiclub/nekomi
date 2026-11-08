import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHiking: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m282-40 121-620q5-24 23-37t38-13 37.5 9 28.5 26l39 64q19 32 52.5 57t78.5 39v-75h40v550h-40v-414q-51-11-96-39t-80-69l-29 145 85 81v296h-60v-244l-100-95-74 339zm17-403-75-14q-10-2-17.5-13t-5.5-22l30-157q5-29 29-44.5t53-10.5l36 7zm179.5-332.5Q457-797 457-827t21.5-51.5T530-900t51.5 21.5T603-827t-21.5 51.5T530-754t-51.5-21.5" /></svg>;
export default MaterialHiking;