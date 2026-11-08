import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHowToRegFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M625-144 484-285l42-42 99 99 213-213 42 42zM292-524q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42m236 120L404-275l115 115H80v-94q0-34 17-62.5t51-43.5q72-32 132-46t120-14q29 0 61.5 3.5T528-404" /></svg>;
export default MaterialHowToRegFill;