import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatTextdirectionLToRFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M390-360v-220q-66 0-113-43t-47-107q0-63 43.5-106.5T380-880h280v60h-90v460h-60v-460h-60v460zM694-80l-42-42 74-74H120v-60h606l-74-74 42-42 146 146z" /></svg>;
export default MaterialFormatTextdirectionLToRFill;