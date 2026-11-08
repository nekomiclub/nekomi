import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeceasedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-152q-86-14-143-81t-57-157v-157q0-20 18-28t32 5l90 78 77-93q9-11 23-11t23 11l77 93 90-78q14-13 32-5t18 28v157q0 90-57 157t-143 81v152q43-51 106-81t134-29v80q0 100-70 170T520-80z" /></svg>;
export default MaterialDeceasedFill;