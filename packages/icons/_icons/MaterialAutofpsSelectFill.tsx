import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutofpsSelectFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m434-601 43-117h6l44 117zm46 219q-97 0-163-66t-66-163 66-163 163-66 163 66 66 163-66 163-163 66M352-494h43l27-73h116l27 73h43L500-772h-40zM120-80v-188h60v188zm120 0v-188h60v188zm120 0v-188h60v188zm120 0v-188h360v188z" /></svg>;
export default MaterialAutofpsSelectFill;