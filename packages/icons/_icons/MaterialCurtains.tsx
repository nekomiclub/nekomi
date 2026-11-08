import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurtains: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h80v-660h640v660h80v60zm140-60h168q-8-74-49-148t-119-95zm0-600v244q78-21 118.5-95.5T387-780zm22 300q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480m498-300H572q8 74 49 148.5T740-536zm0 600v-244q-78 21-119 95.5T572-180zM220-780v244zm520 0v244zm0 600v-244zm-520 0v-243z" /></svg>;
export default MaterialCurtains;