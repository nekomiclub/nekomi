import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShopTwo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m450-360 200-129-200-129zM100-80q-24 0-42-18t-18-42v-459h60v459h609v60zm120-120q-24 0-42-18t-18-42v-518h242v-82q0-24 18-42t42-18h156q24 0 42 18t18 42v82h242v518q0 24-18 42t-42 18zm0-60h640v-458H220zm242-518h156v-82H462zM220-260v-458z" /></svg>;
export default MaterialShopTwo;