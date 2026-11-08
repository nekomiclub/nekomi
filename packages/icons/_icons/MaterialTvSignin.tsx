import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvSignin: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-360h320v-18.72Q640-417 594.5-442T480-467t-114.5 25-45.5 63.28zm211.5-195.42q21.5-21.42 21.5-51.5t-21.42-51.58-51.5-21.5-51.58 21.42-21.5 51.5 21.42 51.58 51.5 21.5 51.58-21.42M330-120v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80zM140-260h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialTvSignin;