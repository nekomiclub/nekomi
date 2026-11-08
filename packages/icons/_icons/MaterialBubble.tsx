import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBubble: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M620.5-812Q686-784 735-735t77 114.5T840-480t-28 140.5T735-225t-114.5 77T480-120q-49 0-98-10.5T296-170l43-43q24 17 63.5 25t77.5 8q127 0 213.5-86.5T780-480t-86.5-213.5T480-780t-213.5 86.5T180-480q0 39 7.5 72.5T211-339l-45 45q-20-32-33-81t-13-105q0-75 28-140.5T225-735t114.5-77T480-840t140.5 28M535-321v-171L163-120l-43-43 372-372H321v-60h274v274z" /></svg>;
export default MaterialBubble;