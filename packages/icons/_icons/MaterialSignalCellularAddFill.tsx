import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-80v-120H620v-60h120v-120h60v120h120v60H800v120zM80-80l800-800v468q-25-15-53.18-23T770-443q-88.68 0-150.84 62.16T557-230q0 42 16 81t46 69z" /></svg>;
export default MaterialSignalCellularAddFill;