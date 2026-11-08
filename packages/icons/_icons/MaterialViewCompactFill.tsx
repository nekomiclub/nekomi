import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewCompactFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M880-170v-620zM80-603v-187h177v187zm207 0v-187h178v187zm208 0v-187h178v187zm208 0v-187h177v187zm0 216v-186h177v186zm-208 0v-186h178v186zm-208 0v-186h178v186zm-207 0v-186h177v186zm623 217v-187h177v187zm-208 0v-187h178v187zm-208 0v-187h178v187zm-207 0v-187h177v187z" /></svg>;
export default MaterialViewCompactFill;