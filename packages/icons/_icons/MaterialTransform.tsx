import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTransform: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M640-40 488-192l42-42 80 80v-139H350q-26 0-43-17t-17-43v-254H80v-60h210v-139l-80 80-42-42 152-152 152 152-42 42-80-80v453h530v60H670v139l80-80 42 42zm-30-373v-194H410v-60h200q26 0 43 17t17 43v194z" /></svg>;
export default MaterialTransform;