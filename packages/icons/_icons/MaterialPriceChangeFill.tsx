import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPriceChangeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-640h800v640zm244-114h60v-45h48q16 0 25.5-12t9.5-27v-115q0-16-9.5-27.5T432-512H297v-69h170v-60h-83v-45h-60v45h-48q-16 0-27.5 12T237-601v114q0 16 11.5 25.5T276-452h131v73H237v60h87zm326-35 60-60H590zm-60-272h120l-60-60z" /></svg>;
export default MaterialPriceChangeFill;