import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrolleyCableCar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-120v-20l60-60H120v-60h40v-480h-40v-60h165v-80h390v80h165v60h-40v480h40v60H651l60 60v20h-52l-80-80H382l-80 80zm-30-140h520v-240H220zm290-300h230v-150H510zm-290 0h230v-150H220zm260 240q26 0 43-17t17-42.5-17-42.5-42.5-17-43 17.21T420-380q0 26 17.5 43t42.5 17M220-500h520z" /></svg>;
export default MaterialTrolleyCableCar;