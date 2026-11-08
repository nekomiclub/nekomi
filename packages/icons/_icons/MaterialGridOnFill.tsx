import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120h140v-200H120v140q0 24.75 17.63 42.37Q155.25-120 180-120m200 0h200v-200H380zm260 0h140q24.75 0 42.38-17.63Q840-155.25 840-180v-140H640zM120-380h200v-200H120zm260 0h200v-200H380zm260 0h200v-200H640zM120-640h200v-200H180q-24.75 0-42.37 17.62Q120-804.75 120-780zm260 0h200v-200H380zm260 0h200v-140q0-24.75-17.62-42.38Q804.75-840 780-840H640z" /></svg>;
export default MaterialGridOnFill;