import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStore: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-740v-60h642v60zm5 580v-258h-49v-60l44-202h641l44 202v60h-49v258h-60v-258H547v258zm60-60h262v-198H225zm-50-258h611zm0 0h611l-31-142H206z" /></svg>;
export default MaterialStore;