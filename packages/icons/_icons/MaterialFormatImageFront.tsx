import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatImageFront: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm0-165v-60h85v60zm165 0v-390h390v390zm470 0v-60h85v60zm-410-60h270v-270H345zM120-450v-60h85v60zm635 0v-60h85v60zM120-615v-60h85v60zm635 0v-60h85v60zM120-780v-60h720v60zm360 300" /></svg>;
export default MaterialFormatImageFront;