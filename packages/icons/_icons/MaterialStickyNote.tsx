import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStickyNote: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M639-120H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v459zm-30-60v-83q0-35 26.5-61.5T697-351h83v-429H180v600zM450-321h60v-258h129v-60H321v60h129zM180-180v-600z" /></svg>;
export default MaterialStickyNote;