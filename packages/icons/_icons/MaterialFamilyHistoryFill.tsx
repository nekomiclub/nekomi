import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFamilyHistoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373.5-103.5Q330-147 330-210q0-55 34.5-95.5T450-357v-93H210v-150H100v-280h280v280H270v90h420v-93q-51-11-85.5-51.5T570-750q0-63 43.5-106.5T720-900t106.5 43.5T870-750q0 55-34.5 95.5T750-603v153H510v93q51 11 85.5 51.5T630-210q0 63-43.5 106.5T480-60t-106.5-43.5" /></svg>;
export default MaterialFamilyHistoryFill;