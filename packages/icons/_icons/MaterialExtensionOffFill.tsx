import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExtensionOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-246 246-800h82q7-49 44-82t87-33q49 0 86 33t45 82h139q30 0 50.5 20.5T800-729v147q38 18 60.5 49.5T883-458t-22.5 75-60.5 49zm41 213L33-841l43-43L884-76zm-650-87q-29 0-50-21t-21-51v-139q52-3 88-39t36-88-36-88.5-87-38.5v-215l679 680z" /></svg>;
export default MaterialExtensionOffFill;