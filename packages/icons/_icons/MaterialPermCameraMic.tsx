import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPermCameraMic: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M386-120H140q-24 0-42-18t-18-42v-513q0-24 18-42t42-18h147l73-87h240l73 87h147q24 0 42 18t18 42v513q0 24-18 42t-42 18H573v-60h247v-513H645l-73-87H388l-73 87H140v513h246zm63 0h60v-141q85-11 144.5-74T713-486h-60q0 67-50.5 116.5T480.16-320t-123-49.5T306-486h-60q0 88 59 151t144 74zm78.5-318.5Q546-457 546-486v-174q0-29-18.5-47.5T480-726t-48 18.5-19 47.5v174q0 29 19 47.5t48 18.5 47.5-18.5M140-180h680z" /></svg>;
export default MaterialPermCameraMic;