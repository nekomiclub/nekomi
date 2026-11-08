import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewObjectTrackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M291-160q-55 0-93-39.5T160-295t38-95.5 93-39.5h458q55 0 93 39.5t38 95.5-38 95.5-93 39.5zm-80-370q-55 0-93-39.5T80-665t38-95.5 93-39.5h458q55 0 93 39.5t38 95.5-38 95.5-93 39.5z" /></svg>;
export default MaterialViewObjectTrackFill;