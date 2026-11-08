import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCreditCardOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M865-181 544-502h276v-129H415L246-800h574q24 0 42 18t18 42v520q0 11-4 21t-11 18M140-502h232L243-631H140zM813-61l-99-99H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h20l60 60h-86L26-848l43-43 787 787z" /></svg>;
export default MaterialCreditCardOffFill;