import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDragIndicatorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M358.41-160Q326-160 303-183.29t-23-56T303.23-295t55.86-23q31.91 0 55.41 23.29t23.5 56T414.41-183t-56 23m241 0Q567-160 544-183.29t-23-56T544.23-295t55.86-23q31.91 0 55.41 23.29t23.5 56T655.41-183t-56 23m-241-241Q326-401 303-423.09t-23-57q0-32.62 23.23-55.77Q326.46-559 359.09-559q31.91 0 55.41 23.23t23.5 55.86Q438-445 414.41-423t-56 22m241 0Q567-401 544-423.09t-23-57q0-32.62 23.23-55.77Q567.46-559 600.09-559q31.91 0 55.41 23.23t23.5 55.86Q679-445 655.41-423t-56 22m-241-241Q326-642 303-665.29t-23-56T303.23-777t55.86-23q31.91 0 55.41 23.29t23.5 56T414.41-665t-56 23m241 0Q567-642 544-665.29t-23-56T544.23-777t55.86-23q31.91 0 55.41 23.29t23.5 56T655.41-665t-56 23" /></svg>;
export default MaterialDragIndicatorFill;