import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutoTowingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-268v-120h440L100-682v147H40v-225h40l474 261v-301h166l200 240v292h-97q0 45-31.5 76.5T715-160t-76.5-31.5T607-268H349q0 45-31.5 76.5T241-160t-76.5-31.5T133-268zm247 46q19-19 19-46t-19-46-46-19-46 19-19 46 19 46 46 19 46-19m474 0q19-19 19-46t-19-46-46-19-46 19-19 46 19 46 46 19 46-19M614-560h228L692-740h-78z" /></svg>;
export default MaterialAutoTowingFill;