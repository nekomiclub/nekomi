import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeWorkFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M697-623h60v-60h-60zm0 171h60v-60h-60zm0 170h60v-60h-60zM40-120v-390l271-194 270 194v390H391v-221H231v221zm601 0v-425L405-710v-130h515v720z" /></svg>;
export default MaterialHomeWorkFill;