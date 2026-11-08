import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloseSmallFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M328.28-286 286-328l151.72-152L286-631l42.28-42L480-521.39 630.72-673 673-631 521.28-480 673-328l-42.28 42L480-437.61z" /></svg>;
export default MaterialCloseSmallFill;