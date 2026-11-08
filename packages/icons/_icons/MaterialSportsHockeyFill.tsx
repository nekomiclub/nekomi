import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsHockeyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-85q0-18 11-29t29-11h20v125zm104 0v-125h175l43-94 49 97-46 101q-5 11-14.5 16t-21.5 5zm636 0v-125h20q18 0 29 11t11 29v85zm-44 0H591q-12 0-21.5-5T555-181L273-800h93l114 250 114-250h93L527-447l74 162h175z" /></svg>;
export default MaterialSportsHockeyFill;