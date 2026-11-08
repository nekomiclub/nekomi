import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material9kPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M233-360h137q14 0 23.5-9.5T403-393v-173q0-14-9.5-24T370-600H266q-14 0-23.5 10t-9.5 24v70q0 14 9.5 23.5T266-463h87v53H233zm50-136v-70h70v70zm183 136h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50zm210-40h40v-63h64v-33h-64v-64h-40v64h-63v33h63zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default Material9kPlusFill;