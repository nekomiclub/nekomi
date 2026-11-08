import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusPen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m243-326 99-359h66v-60l59-135h26l59 135v60h66l99 359zm79-60h316l-65-239H387zM160-120l21-57q8-22 27-35.5t42-13.5h460q23 0 42 13.5t27 35.5l21 57zm162-266h316z" /></svg>;
export default MaterialStylusPen;