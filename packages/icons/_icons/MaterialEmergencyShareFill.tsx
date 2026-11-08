import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmergencyShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480 0Q359-103 299.5-191T240-354q0-102 69.5-174T480-600t170.5 72T720-354q0 75-59.5 163T480 0m35.5-324.5Q530-339 530-360t-14.5-35.5T480-410t-35.5 14.5T430-360t14.5 35.5T480-310t35.5-14.5M332-669l-42-42q38-38 87.5-58.5T481-790t103.5 20.5T672-711l-42 42q-29-29-68-45t-81-16-81 16-68 45M220-782l-43-41q61-60 139.5-93.5T481-950t165 33.5T786-823l-43 42q-53-53-120.5-81T481-890t-141.5 27.5T220-782" /></svg>;
export default MaterialEmergencyShareFill;