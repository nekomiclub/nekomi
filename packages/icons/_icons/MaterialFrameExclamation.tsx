import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFrameExclamation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-380v-380h60v380zm0 180v-60h60v60zM223-40H100q-24 0-42-18t-18-42v-123h60v123h123zm514 0v-60h123v-123h60v123q0 24-18 42t-42 18zM40-737v-123q0-24 18-42t42-18h123v60H100v123zm820 0v-123H737v-60h123q24 0 42 18t18 42v123z" /></svg>;
export default MaterialFrameExclamation;