import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLightOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M423.5-103Q401-126 399-161h162q-2 35-24.5 58T480-80t-56.5-23M480-837q-58 0-106 25t-82 67l-42-42q41-48 100.5-79T480-897q122 0 211 89t89 211q0 72-29.5 130T670-368l-43-43q44-34 68.5-82.5T720-597q0-99-70.5-169.5T480-837M853-99l-43 43-288-288H323q-68-45-105.5-108.5T180-597q0-21 3-41t8-37L57-809l43-43zM345-404h118L242-625q-2 6-2 13v15q0 57 27 107.5t78 85.5m297 121v60H318v-60z" /></svg>;
export default MaterialLightOff;