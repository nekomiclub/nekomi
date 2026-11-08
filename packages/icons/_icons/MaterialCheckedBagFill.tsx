import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckedBagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M319-240v-480h38q0-54 36-87t86-33 86 33 36 87h38v480zm82-480h156q0-34-23.5-54.5T479-795t-54.5 20.5T401-720m283 480v-480h56q24 0 42 18t18 42v360q0 24-18 42t-42 18zm-466 0q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h56v480zM80-120v-60h800v60z" /></svg>;
export default MaterialCheckedBagFill;