import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkFlag: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M385-405h50v-120h175l-56.25-75L610-675H385zM200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240zm60-91 220-93 220 93v-574H260zm0-574h440z" /></svg>;
export default MaterialBookmarkFlag;