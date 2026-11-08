import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRubric: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-720h640v390H220v105h230v60H220v105h230v60zm474 0L520-234l43-43 71 71 152-152 43 43zM220-510h230v-105H220zm290 0h230v-105H510zM220-675h230v-105H220zm290 0h230v-105H510z" /></svg>;
export default MaterialRubric;