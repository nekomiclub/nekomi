import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageUsDvorakFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-340h150v-280H220zm-60 60v-400h210q25 0 42.5 17.62Q430-644.75 430-620v280q0 24.75-17.62 42.37Q394.75-280 370-280zm474 0L494-680h60l114 319 113-319h60L700-280z" /></svg>;
export default MaterialLanguageUsDvorakFill;