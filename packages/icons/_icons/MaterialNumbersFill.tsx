import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNumbersFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m239-160 40-159H120l15-60h159l51-202H186l15-60h159l39-159h59l-39 159h203l39-159h59l-39 159h159l-15 60H666l-51 202h159l-15 60H600l-40 159h-59l40-159H338l-40 159zm114-219h203l51-202H404z" /></svg>;
export default MaterialNumbersFill;