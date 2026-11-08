import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularNodata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m676-114-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83zM80-80l800-800v466q-14-9-28.5-16.5T820-443v-293L224-140h350q9 17 21.5 32T622-80zm144-60 596-596-183 183-140.5 140.5-128 128z" /></svg>;
export default MaterialSignalCellularNodata;