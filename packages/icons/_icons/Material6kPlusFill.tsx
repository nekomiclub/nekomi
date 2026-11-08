import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material6kPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M266-360h100q14 0 24-9.5t10-23.5v-70q0-14-10-23.5t-24-9.5h-83v-54h117v-50H266q-14 0-23.5 10t-9.5 24v173q0 14 9.5 23.5T266-360m17-33v-70h67v70zm183 33h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50zm210-40h40v-63h64v-33h-64v-64h-40v64h-63v33h63zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default Material6kPlusFill;