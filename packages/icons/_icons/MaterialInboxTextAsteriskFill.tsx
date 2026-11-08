import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInboxTextAsteriskFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m664-141-48-35 64-88-104-34 19-57 103 33v-108h60v108l104-33 18 57-103 34 64 88-49 35-64-88zm-484 21q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v247q-14-6-29-11t-31-8v-228H180v404h170q19 29 43.5 50t54.5 29q-5 48 7.5 93t39.5 84zm97-500h406v-60H277zm0 144h254q20-20 42.5-34.5T622-536H277z" /></svg>;
export default MaterialInboxTextAsteriskFill;