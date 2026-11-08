import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVr180Create2dOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-242q-119-23-199.5-114T80-568q0-50 15-95.5t41-83.5l-93-94 43-43L899-71l-43 43-52-52H480q-24 0-42-18t-18-42v-324l-54-53q-3 9-4.5 18t-1.5 19zm32-638q121 0 211 80t111 200H484L242-842q35-19 73-28.5t77-9.5m152 340h276q24 0 42 18t18 42v276zm156 356-48-48-21 28-51-63q-2-3-6-3t-6 3l-59 83z" /></svg>;
export default MaterialVr180Create2dOffFill;