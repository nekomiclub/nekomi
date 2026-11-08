import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundbar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-452h60v-142h-60zM203-200v-60h142v60zm411 0v-60h142v60zM274-452q30 0 50.5-20.8 20.5-20.79 20.5-50 0-29.2-20.5-50.2t-50-21-50.5 20.8q-21 20.79-21 50 0 29.2 20.86 50.2 20.85 21 50.14 21m411 0q30 0 50.5-20.8 20.5-20.79 20.5-50 0-29.2-20.5-50.2t-50-21-50.5 20.8q-21 20.79-21 50 0 29.2 20.86 50.2 20.85 21 50.14 21M140-326q-24 0-42-18t-18-42v-274q0-24 18-42t42-18h680q24 0 42 18t18 42v274q0 24-18 42t-42 18zm0-60h680v-274H140zm340-137" /></svg>;
export default MaterialSoundbar;