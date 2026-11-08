import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsSystemDaydreamFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M354-333h273q36 0 62-24t26-59-26-58.5-62-23.5h-15q-5-53-39-91t-85-38q-42 0-76 24.5T364-538h-18q-39 0-65 30t-26 72 28.5 72.5T354-333M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialSettingsSystemDaydreamFill;