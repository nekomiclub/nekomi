import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpenJam: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120h480v-60H510v-339l78 78 46-46-154-154-154 154 46 46 78-78v339H240zM140-328q-24 0-42-18t-18-42v-392q0-24 18-42t42-18h680q24 0 42 18t18 42v392q0 24-18 42t-42 18H610v-60h210v-392H140v392h210v60z" /></svg>;
export default MaterialOpenJam;