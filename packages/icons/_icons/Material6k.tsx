import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material6k: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50zm-230 0h103q14.02 0 23.51-9.49T426-393v-70q0-14.02-9.49-23.51T393-496h-87v-54h120v-50H289.78Q276-600 266-590.22q-10 9.77-10 24.22v173q0 14.02 9.77 23.51Q275.55-360 290-360m16-33v-70h70v70zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default Material6k;