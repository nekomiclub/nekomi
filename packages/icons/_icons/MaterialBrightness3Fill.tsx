import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightness3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M365-81q-21 0-42-2t-38-5q107-43 170-149t63-244q0-137-63-243T285-874q14-3 37-5t44-2q81 0 152.5 31.5t125.5 86T729-636t31 155-31.5 155-85 127.5-125.5 86T365-81" /></svg>;
export default MaterialBrightness3Fill;