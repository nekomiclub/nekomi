import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddBusinessFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M721-46v-121H601v-60h120v-120h60v120h120v60H781v121zM110-167v-245H60v-60l44-202h590l46 207v55h-49v155h-60v-155H426v245zm60-60h196v-185H170zm-66-507v-60h592v60z" /></svg>;
export default MaterialAddBusinessFill;