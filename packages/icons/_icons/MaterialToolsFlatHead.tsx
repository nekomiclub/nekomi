import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToolsFlatHead: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-120v-60h320v60zm0-120-40-280 80-320h240l80 320-40 280zm52-60h216l27-190H344zm-23-250h262l-57-230H406zm239 250H372z" /></svg>;
export default MaterialToolsFlatHead;