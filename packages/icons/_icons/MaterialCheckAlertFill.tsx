import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M378-246 154-470l43-43 181 181 384-384 43 43zM588-96.5Q532-152 532-230q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T722-41 588-96.5M722-117q9 0 15.5-6t6.5-16-6.5-16-15.5-6q-10 0-16 6t-6 16 6 16 16 6m-18-85h35v-143h-35z" /></svg>;
export default MaterialCheckAlertFill;