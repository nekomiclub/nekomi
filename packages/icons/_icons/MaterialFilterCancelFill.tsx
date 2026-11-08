import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterCancelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m636-180-42-42 83-84-83-83 42-42 84 83 83-83 42 42-83 83 83 84-42 42-83-83zm-269 20q-17 0-28.5-11.5T327-200v-240L88-745q-4-5-5.5-10.5T81-766q0-14 9.5-24t24.5-10h584q15 0 24.5 10t9.5 24q0 5-1.5 10.5T726-745L487-440v240q0 17-11.5 28.5T447-160z" /></svg>;
export default MaterialFilterCancelFill;