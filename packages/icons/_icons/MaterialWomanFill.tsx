import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWomanFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M420-80v-220H300l102-328q8-25 30-38.5t48-13.5 48 13.5 30 38.5l102 328H540v220zm8.5-675.42q-21.5-21.42-21.5-51.5t21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5-51.58-21.42" /></svg>;
export default MaterialWomanFill;