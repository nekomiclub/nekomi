import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileSave: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m730-124 146-146-42-42-74 74v-181h-60v181l-74-74-42 42zM580 0v-60h300V0zM220-160q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h306l234 234v167h-60v-141H500v-200H220v600h300v60zm0-60v-600z" /></svg>;
export default MaterialFileSave;