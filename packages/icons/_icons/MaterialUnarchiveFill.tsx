import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnarchiveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-581 324-425l40 40 86-86v201h60v-201l86 86 40-40zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-529q0-9.88 3-19.06t9-16.94l52-71q8-11 20.94-17.5T232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.76 9 16.94t3 19.06v529q0 24.75-17.62 42.37Q804.75-120 780-120zm17-614h565l-36.41-46H233z" /></svg>;
export default MaterialUnarchiveFill;