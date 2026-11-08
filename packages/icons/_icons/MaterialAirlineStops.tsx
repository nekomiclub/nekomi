import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineStops: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-200v-60h80q-8-154-113-262T80-630v-60q135 0 243.5 78T480-407q35-96 102.5-170T740-700H580v-60h260v260h-60v-153q-114 59-188 162t-82 231h80v60z" /></svg>;
export default MaterialAirlineStops;