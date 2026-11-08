import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkunreadMailbox: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-417v-148H140v425h680v-425H360v-60h460q24 0 42 18t18 42v425q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-425q0-24 18-42t42-18h100v-255h300v160H300v303zM140-565v148zv425z" /></svg>;
export default MaterialMarkunreadMailbox;