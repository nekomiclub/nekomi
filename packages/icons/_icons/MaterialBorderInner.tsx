import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBorderInner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h60v60zm0-165v-60h60v60zm0-330v-60h60v60zm0-165v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm330 660v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-330v-60h60v60zm0-165v-60h60v60zm-165 0v-60h60v60zM450-120v-330H120v-60h330v-330h60v330h330v60H510v330z" /></svg>;
export default MaterialBorderInner;