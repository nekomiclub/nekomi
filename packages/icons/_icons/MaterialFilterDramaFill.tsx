import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterDramaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M251-160q-88 0-149.5-61.5T40-371q0-75 52.5-127.5T220-551t127.5 48T400-380h60q0-83-61.5-153T225-611q25-82 97-135.5T481-800q112 0 189.5 82.5T748-522v24q74 0 123 48t49 121q0 69-50 119t-119 50z" /></svg>;
export default MaterialFilterDramaFill;