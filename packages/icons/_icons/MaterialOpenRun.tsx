import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpenRun: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-165 88-88 43 42L480-80 349-211l43-42zM165-480l88 88-42 43L80-480l131-131 42 43zm630 0-88-88 42-43 131 131-131 131-42-43zM480-795l-88 88-43-42 131-131 131 131-43 42z" /></svg>;
export default MaterialOpenRun;