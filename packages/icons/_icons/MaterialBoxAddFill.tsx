import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBoxAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-529q0-9.88 3-19.06t9-16.94l52-71q8-11 20.94-17.5T232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.76 9 16.94t3 19.06v235q-19-7-38.02-10.5Q782.97-488 763-488q-35 0-66 10t-57 28v-224H320v342l160-80 90 45q-11 21-16.5 44.5T548-273q0 44 16.5 83.5T612-120zm552-3v-120H612v-60h120v-120h60v120h120v60H792v120zM197-734h565l-36.41-46H233z" /></svg>;
export default MaterialBoxAddFill;