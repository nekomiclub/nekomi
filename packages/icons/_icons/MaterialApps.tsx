import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApps: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M179-179q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19M179-433q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19M179-687q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19" /></svg>;
export default MaterialApps;