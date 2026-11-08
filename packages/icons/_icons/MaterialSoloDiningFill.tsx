import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoloDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M377-656q-47 0-79.5-32.5T265-768q0-46 32.5-79t79.5-33q46 0 79 33t33 79q0 47-33 79.5T377-656M40-80v-60h81v-337q0-26 23-53t64-47q37-18 80.5-28t88.5-10 89.5 10.5T548-575q39 20 61.5 46t22.5 52v113H458l56 224h65q-3-6-5-12t-4-13l-35-139h382l-35 139q-2 7-4 13t-5 12h47v60z" /></svg>;
export default MaterialSoloDiningFill;