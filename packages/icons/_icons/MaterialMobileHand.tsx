import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileHand: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-140v-680zM647-40q-23 0-44.5-9T566-76L369-311l30-31q16-16 38-18.5t43 5.5l138 56v-371h70q62.7 0 107.35 43.5T840-520v330q0 63-43.5 106.5T690-40zM220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-680q0-24.75 17.63-42.38Q195.25-880 220-880h398q24.75 0 42.38 17.62Q678-844.75 678-820v150h-60v-150H220v680h292l50 60zm220.5-608.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68M648-100h42q38 0 64-26.5t26-63.5v-330q0-38-26-64t-64-26h-12v409L457-301l152 183q7 9 17.5 13.5T648-100" /></svg>;
export default MaterialMobileHand;