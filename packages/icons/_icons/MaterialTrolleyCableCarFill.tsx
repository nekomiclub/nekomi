import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrolleyCableCarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-120v-20l60-60H120v-60h40v-480h-40v-60h165v-80h390v80h165v60h-40v480h40v60H651l60 60v20h-52l-80-80H382l-80 80zm260-440h230v-150H510zm-290 0h230v-150H220zm260 240q26 0 43-17t17-43q0-25-17-42t-43-17q-25 0-42.5 17T420-380q0 26 17.5 43t42.5 17" /></svg>;
export default MaterialTrolleyCableCarFill;