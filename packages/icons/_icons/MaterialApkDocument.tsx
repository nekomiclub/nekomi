import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApkDocument: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-200h400q-4-49-30-90t-68-65l38-68q2-4 1-9t-6-7q-4-2-8.5-1t-6.5 5l-39 70q-20-8-40-12.5t-41-4.5-41 4.5-40 12.5l-39-70q-2-5-6.5-5t-9.5 2l-4 15 38 68q-42 24-68 65t-30 90m96-66q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m180 0q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm331-554v-186H220v680h520v-494zM220-820v186zv680z" /></svg>;
export default MaterialApkDocument;