import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m786-88-72-72H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h20l60 60h-86l-79-79 43-43 731 731zm79-93L543-503l277-182-4-55-309 201-261-261h574q24 0 42 18t18 42v520q0 11-4 21t-11 18" /></svg>;
export default MaterialMailOffFill;