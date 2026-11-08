import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackspaceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m448-326 112-112 112 112 43-43-113-111 111-111-43-43-110 112-112-112-43 43 113 111-113 111zm-98 166q-14 0-27-6.5T302-184L80-480l221-296q8-11 21-17.5t27-6.5h472q25 0 42.5 17.5T881-740v520q0 25-17.5 42.5T821-160z" /></svg>;
export default MaterialBackspaceFill;