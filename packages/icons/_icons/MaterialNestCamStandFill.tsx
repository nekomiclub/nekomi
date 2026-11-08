import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestCamStandFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120q-35 0-59-26.5T160-208l24-280q5-75 44.5-136T330-720v160q0 63 43.5 106.5T480-410t106.5-43.5T630-560v-160q62 35 101.5 96T776-488l24 284q3 35-21 59.5T720-120zm176-376q-26-26-26-64v-160q0-38 26-64t64-26 64 26 26 64v160q0 38-26 64t-64 26-64-26" /></svg>;
export default MaterialNestCamStandFill;