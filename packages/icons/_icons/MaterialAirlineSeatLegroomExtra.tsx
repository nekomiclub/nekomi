import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatLegroomExtra: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-280H140q-25 0-42.5-17.5T80-340v-500h60v500h380zm227 160L606-410H340q-45 0-77.5-32.5T230-520v-320h220v250h130q20 0 37 11t26 29l146 300 58-26q19-8 38.5-3t30.5 25q11 19 4 39t-27 29z" /></svg>;
export default MaterialAirlineSeatLegroomExtra;