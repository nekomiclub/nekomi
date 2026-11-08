import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCompressFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-410v-70h640v70zm0-121v-60h640v60zM449-80v-158l-77 76-42-42 149-148 147 148-42 42-75-76v158zm30-568L331-796l42-42 75 76v-158h60v158l77-76 42 42z" /></svg>;
export default MaterialCompressFill;