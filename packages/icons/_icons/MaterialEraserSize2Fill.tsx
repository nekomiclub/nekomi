import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEraserSize2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M309.76-200Q264-200 232-232.06q-32-32.07-32-77.87 0-21.07 8-41.57t24-36.5l340-340q16-16 36.59-24 20.6-8 41.65-8Q696-760 728-727.94q32 32.07 32 77.87 0 21.07-8 41.57T728-572L388-232q-16 16-36.59 24-20.6 8-41.65 8" /></svg>;
export default MaterialEraserSize2Fill;