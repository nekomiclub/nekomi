import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAdOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m815-56-64-64H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-571l-54-54 43-43L858-99zM180-180h511L180-692zm660-22-60-60v-421H359L202-840h578q24.75 0 42.38 17.62Q840-804.75 840-780z" /></svg>;
export default MaterialAdOff;