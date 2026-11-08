import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHandheldControllerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M439-243q-66 0-111-48.5T274-408q-100-1-167-74T40-656q0-25 17.5-42.5T100-716h186v-64h-82v-60h224v60h-82v64h145q12 0 23.5 5t19.5 13l346 348q40 40 40.5 96T880-159q-39 39-94.5 39T691-159l-83-84zm5-165h-97q-4 42 23 73.5t69 31.5h109z" /></svg>;
export default MaterialHandheldControllerFill;