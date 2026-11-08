import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material5kFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50zm-264 0h137q14 0 23.5-9.5T426-393v-70q0-14-9.5-23.5T393-496h-87v-54h120v-50H256v137h120v53H256zm-76 240q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default Material5kFill;