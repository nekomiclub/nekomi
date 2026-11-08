import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeWork: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M697-623h60v-60h-60zm0 171h60v-60h-60zm0 170h60v-60h-60zm-56 162v-60h219v-600H465v112l-60-42v-130h515v720zm-601 0v-390l271-194 270 194v390H364v-201H258v201zm60-60h98v-201h226v201h97v-299L311-630 100-478.58zm324 0v-201H198v201-201h226z" /></svg>;
export default MaterialHomeWork;