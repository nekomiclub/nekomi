import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShelfPositionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-121q-24.75 0-42.37-17.63Q120-156.25 120-181v-141h720v141q0 24.75-17.62 42.37Q804.75-121 780-121zm470-261v-458h130q24.75 0 42.38 17.62Q840-804.75 840-780v398zm-530 0v-398q0-24.75 17.63-42.38Q155.25-840 180-840h130v458zm250 0v-458h220v458z" /></svg>;
export default MaterialShelfPositionFill;