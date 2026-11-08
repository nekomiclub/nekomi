import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileChat: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-100v-760zm440 0v-120zM580-340h240v-160H580zm-60 140v-330q0-12.75 8.63-21.38Q537.25-560 550-560h300q12.75 0 21.38 8.62Q880-542.75 880-530v220q0 12.75-8.62 21.37Q862.75-280 850-280H600zM260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24.75 17.63-42.38Q235.25-920 260-920h440q24.75 0 42.38 17.62Q760-884.75 760-860v200h-60v-200H260v760h440v-80h60v80q0 25-17.62 42.5Q724.75-40 700-40zm240-689q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m80 389v-160z" /></svg>;
export default MaterialMobileChat;