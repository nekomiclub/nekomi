import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThumbDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M239-840h467v512L428-40l-33-26q-11-8-14.5-18t-3.5-23v-10l45-211H100q-23 0-41.5-18.5T40-388v-82q0-11 2.5-25.5T50-521l116-268q9-21 29.5-36t43.5-15m527 512v-512h114v512z" /></svg>;
export default MaterialThumbDownFill;