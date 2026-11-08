import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditAudioFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-80 80-229l150-150 43 42-78 78h571l-78-78 42-42 150 150L730-80l-43-42 78-77H196l76 77zm220-367v-473h60v473zm-165-79v-314h60v314zm330 0v-314h60v314zM120-633v-101h60v101zm660 0v-101h60v101z" /></svg>;
export default MaterialEditAudioFill;