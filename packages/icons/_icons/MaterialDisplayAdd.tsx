import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDisplayAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-780v19zv520zm190 660v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h389q-5 14.17-7.5 29.08Q519-796 517-780H140v520h680v-262q16-4 31.17-9.32T880-545v285q0 24-18 42t-42 18H630v80zm402-484v-128H604v-60h128v-128h60v128h128v60H792v128z" /></svg>;
export default MaterialDisplayAdd;