import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVoiceChatOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M860-28 648-240H240L80-80v-728l-24-24 41-44L903-70zM670-530h40v-60h-40zm149 290L610-449v-221h-40v181l-70-70v-191h-40v152L178-880h642q23 0 41.5 18.5T880-820v520q0 23-17.5 41.5T819-240M500-388l-40-40v58h40zm-150-62h40v-48l-40-40zm-100-80h40v-60h-40z" /></svg>;
export default MaterialVoiceChatOffFill;