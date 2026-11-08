import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurrencyPound: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120v-64q26-16 47-35.5t36-41.5 23-47 8-52q0-13-1.5-25t-4.5-25H240v-60h78q-39-54-53.5-95.5T250-650q0-88 61-149t149-61q65 0 117.5 32.5T655-740l-55 23q-18-38-56.5-60.5T460-800q-62 0-106 43.5T310-650q0 39 16 76.5T390-470h170v60H409q3 13 4 26t1 24q0 53-23 99t-58 81h227q38 0 67-20t42-65l52 26q-13 59-60.5 89T560-120z" /></svg>;
export default MaterialCurrencyPound;