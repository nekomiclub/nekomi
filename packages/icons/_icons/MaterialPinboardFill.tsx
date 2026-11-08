import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPinboardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m254-80-30-30v-173H80v-68l62-111v-112H80v-60h348v60h-62v112l62 111v68H284v173zm237-80v-60h329v-520H80q0-25 17.63-42.5Q115.25-800 140-800h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialPinboardFill;