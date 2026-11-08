import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHideImageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M840-233 233-840h547q24 0 42 18t18 42zM806-56l-64-64H180q-24 0-42-18t-18-42v-562l-63-63 43-43L849-99zM236-277h350l-90-90-50 65-93-127z" /></svg>;
export default MaterialHideImageFill;