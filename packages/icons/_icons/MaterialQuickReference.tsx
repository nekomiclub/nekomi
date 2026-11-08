import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQuickReference: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M635-150h40v-150h-40zm20-189q8 0 14-6.15t6-14.35-6-14.35-14-6.15q-9 0-14.5 6t-5.5 14.29q0 8.28 5.5 14.5Q646-339 655-339M180-820v295-4 389zv186zm99 400h166.54Q458-437 473-452t32-28H279zm0 170h123q-2-14-1.5-29.5T403-310H279zM180-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v155q-14-6-29-11t-31-8v-109H511v-186H180v680h259q11 17 23.96 32.09Q475.91-92.82 492-80zm612.5-332.5Q849-356 849-275t-56.5 137.5T655-81t-137.5-56.5T461-275t56.5-137.5T655-469t137.5 56.5" /></svg>;
export default MaterialQuickReference;