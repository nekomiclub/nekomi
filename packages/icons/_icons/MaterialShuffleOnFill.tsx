import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShuffleOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-40q-24 0-42-18t-18-42v-761q0-23 18-41.5t42-18.5h761q23 0 41.5 18.5T921-861v761q0 24-18.5 42T861-40zm476-120h224v-223h-60v121L564-436l-42 43 174 173H576zm-374 0 538-537v120h60v-223H576v60h122L160-203zm193-363 43-43-235-234-43 43z" /></svg>;
export default MaterialShuffleOnFill;