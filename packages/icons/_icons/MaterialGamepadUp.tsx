import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGamepadUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-551 369-663v-217h223v217zm183 182L551-480l112-112h217v223zm-583 0v-223h217l112 112-112 111zM369-80v-217l111-112 112 112v217zM140-429h135l52-51-52-52H140zm289 289h103v-135l-52-52-51 52zm257-289h134v-103H686l-52 52z" /></svg>;
export default MaterialGamepadUp;