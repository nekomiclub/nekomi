import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageSpanishFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580-280q-24 0-42-18t-18-42v-40h60v40h160v-110H580q-24 0-42-18t-18-42v-110q0-24 18-42t42-18h160q24 0 42 18t18 42v40h-60v-40H580v110h160q24 0 42 18t18 42v110q0 24-18 42t-42 18zM160-680h280v60H220v110h180v60H220v110h220v60H160z" /></svg>;
export default MaterialLanguageSpanishFill;