import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewObjectTrack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M291-160q-55 0-93-39.55t-38-95.5 38-95.45 93-39.5h458q55 0 93 39.55t38 95.5-38 95.45-93 39.5zm0-60h458q29.58 0 50.29-21.82 20.71-21.83 20.71-53Q820-326 799.29-348T749-370H291q-29.58 0-50.29 21.82-20.71 21.83-20.71 53Q220-264 240.71-242T291-220m-80-310q-55 0-93-39.55t-38-95.5 38-95.45 93-39.5h458q55 0 93 39.55t38 95.5-38 95.45-93 39.5zm0-60h458q29.58 0 50.29-21.82 20.71-21.83 20.71-53Q740-696 719.29-718T669-740H211q-29.58 0-50.29 21.82-20.71 21.83-20.71 53Q140-634 160.71-612T211-590m229-75" /></svg>;
export default MaterialViewObjectTrack;