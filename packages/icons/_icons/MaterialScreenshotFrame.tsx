import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenshotFrame: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-690v-130q0-24 18-42t42-18h130v60H260v130zm60 610q-24 0-42-18t-18-42v-130h60v130h130v60zm440-610v-130H570v-60h130q24 0 42 18t18 42v130zM570-80v-60h130v-130h60v130q0 24-18 42t-42 18z" /></svg>;
export default MaterialScreenshotFrame;