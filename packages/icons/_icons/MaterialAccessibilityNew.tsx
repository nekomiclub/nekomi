import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccessibilityNew: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M428.5-755.5Q407-777 407-807t21.5-51.5T480-880t51.5 21.5T553-807t-21.5 51.5T480-734t-51.5-21.5M373-80v-533q-68-5-131.5-14T120-650l15-60q85 20 169 28.5t176 8.5 176-8.5T825-710l15 60q-58 14-121.5 23T587-613v533h-60v-260h-94v260z" /></svg>;
export default MaterialAccessibilityNew;