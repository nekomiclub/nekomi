import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPolyline: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M620-80v-95L310-330H120v-220h175l125-140v-190h220v220H474L340-510v129l280 139v-58h220v220zM480-720h100v-100H480zM180-390h100v-100H180zm500 250h100v-100H680zm50-50" /></svg>;
export default MaterialPolyline;