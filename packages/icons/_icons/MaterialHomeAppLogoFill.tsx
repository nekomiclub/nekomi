import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeAppLogoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M233-120q-47 0-80-33t-33-80v-247q0-23 8.5-43.5T153-560l248-247q17-17 37.5-25t41.5-8q22 0 42.5 8t37.5 25l38 38-313 314v170h390v-170L523-608l118-118 166 166q16 16 24.5 36.5T840-480v247q0 47-32.5 80T728-120z" /></svg>;
export default MaterialHomeAppLogoFill;