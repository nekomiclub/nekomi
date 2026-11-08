import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrunchDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M110-80q-15 0-22.5-7.5T80-110v-50h570v50q0 15-7.5 22.5T620-80zM80-224v-50q0-15 7.5-22.5T110-304h182v-73h146v73h182q15 0 22.5 7.5T650-274v50zM744-80v-264q-31-26-53.5-69T668-510v-370h212v370q0 54-22.5 97T804-344v204h76v60zm-16-561h92v-179h-92zm46 244q23-20 34.5-50.5T820-510v-71h-92v71q0 32 11.5 62.5T774-397m0 0" /></svg>;
export default MaterialBrunchDining;