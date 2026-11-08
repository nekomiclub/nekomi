import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRepeatOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-40q-24 0-42-18t-18-42v-761q0-23 18-41.5t42-18.5h761q23 0 41.5 18.5T921-861v761q0 24-18.5 42T861-40zm180-40 42-44-86-86h524v-220h-60v160H236l86-86-42-44-160 160zm-80-450h60v-160h464l-86 86 42 44 160-160-160-160-42 44 86 86H200z" /></svg>;
export default MaterialRepeatOn;