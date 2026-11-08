import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCodeOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-61 279-595 166-482l197 197-43 43L80-482l156-156L61-813l43-43 752 752zm-91-263-43-43 115-115-197-197 43-43 240 240z" /></svg>;
export default MaterialCodeOff;