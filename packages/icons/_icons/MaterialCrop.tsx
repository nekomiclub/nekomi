import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCrop: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M695-40v-165H265q-24 0-42-18t-18-42v-430H40v-60h165v-165h60v655h655v60H755v165zm0-285v-370H325v-60h370q24 0 42 18t18 42v370z" /></svg>;
export default MaterialCrop;