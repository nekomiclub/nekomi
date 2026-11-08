import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMapsUgcFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m40-40 72-255q-20-43-29-88.5T74-477q0-84 31.5-157T192-762t128-86.5T477-880t157 31.5T762-762t86.5 128T880-477t-31.5 157T762-192t-128 86.5T477-74q-48 0-93.5-9T295-112zm407-276h60v-127h128v-60H507v-128h-60v128H319v60h128z" /></svg>;
export default MaterialMapsUgcFill;