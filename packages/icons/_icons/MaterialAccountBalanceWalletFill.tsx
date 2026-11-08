import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountBalanceWalletFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-23 0-41.5-18T120-180v-600q0-23 18.5-41.5T180-840h600q24 0 42 18.5t18 41.5v54H538q-58 0-96 38t-38 95v227q0 57 38 95t96 38h302v53q0 24-18 42t-42 18zm358-173q-34 0-54-20t-20-53v-227q0-34 20-53.5t54-19.5h269q34 0 54 19.5t20 53.5v227q0 33-20 53t-54 20zm158.5-142.5Q716-455 716-481q0-25-19.5-44T652-544t-44.5 19-19.5 44q0 26 19.5 45.5T652-416t44.5-19.5" /></svg>;
export default MaterialAccountBalanceWalletFill;