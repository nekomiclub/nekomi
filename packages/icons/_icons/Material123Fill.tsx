import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material123Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-360v-192h-60v-48h108v240zm132 0v-110q0-15 9.5-24.5T386-504h98v-48H352v-48h146q15 0 24.5 9.5T532-566v76q0 15-9.5 24.5T498-456h-98v48h132v48zm248 0v-48h132v-48h-92v-48h92v-48H600v-48h146q15 0 24.5 9.5T780-566v172q0 15-9.5 24.5T746-360z" /></svg>;
export default Material123Fill;