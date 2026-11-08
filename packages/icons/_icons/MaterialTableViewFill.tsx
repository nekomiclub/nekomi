import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableViewFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-80h230v-178H240v118q0 24.75 17.63 42.37Q275.25-80 300-80m290 0h230q24.75 0 42.38-17.63Q880-115.25 880-140v-118H590zM80-244v-576q0-24 18-42t42-18h576v60H140v576zm160-74h290v-178H240zm350 0h290v-178H590zM240-556h640v-104q0-24.75-17.62-42.38Q844.75-720 820-720H300q-24.75 0-42.37 17.62Q240-684.75 240-660z" /></svg>;
export default MaterialTableViewFill;