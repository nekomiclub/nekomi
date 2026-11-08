import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilePresentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm260-140q59 0 99.5-41t40.5-99v-140h-40v140q0 42-29 71t-71 29-71-29-29-71v-220q0-18 11.5-29t28.5-11q18 0 29 11t11 29v200h40v-200q0-34-23-57t-57-23q-33 0-56.5 23T340-580v220q0 58 41 99t99 41m74-414h186L554-820z" /></svg>;
export default MaterialFilePresentFill;