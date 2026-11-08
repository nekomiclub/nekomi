import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDisplayAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M732-604v-128H604v-60h128v-128h60v128h128v60H792v128zM630-120H330v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h389q-6 19-9.5 38.5T516-761q0 103 71.5 174.5T762-515q32 0 62-8t56-22v285q0 24-18 42t-42 18H630z" /></svg>;
export default MaterialDisplayAddFill;