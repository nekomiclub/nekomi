import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHowToVote: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24 0-42-18t-18-42v-198l135-149 43 43-118 129h600L669-441l43-43 128 146v198q0 24-18 42t-42 18zm0-60h600v-115H180zm262-245L283-544q-19-19-17-42.5t20-41.5l212-212q16.93-16.56 41.97-17.28Q565-858 583-840l159 159q17 17 17.5 40.5T740-597L528-385q-17 17-42 18t-44-18m249-257L541-792 333-584l150 150zM180-140v-115z" /></svg>;
export default MaterialHowToVote;