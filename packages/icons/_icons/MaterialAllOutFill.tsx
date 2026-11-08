import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAllOutFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-175h60v115h115v60zm545 0v-60h115v-115h60v175zM267.5-267.5Q180-355 180-480t87.5-212.5T480-780t212.5 87.5T780-480t-87.5 212.5T480-180t-212.5-87.5M120-665v-175h175v60H180v115zm660 0v-115H665v-60h175v175z" /></svg>;
export default MaterialAllOutFill;