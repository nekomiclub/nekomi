import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGrading: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-120 555-226l43-42 63 63 138-139 43 42zm-540 0v-60h360v60zm0-165v-60h360v60zm0-165v-60h720v60zm0-165v-60h720v60zm0-165v-60h720v60z" /></svg>;
export default MaterialGrading;