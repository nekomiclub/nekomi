import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVoiceChatOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m819-240-60-60h61v-520H238l-60-60h642q23 0 41.5 18.5T880-820v520q0 23-17.5 41.5T819-240m41 212L648-240H240L80-80v-729l-24-23 41-44L903-70zM140-749v529l74-80h374zm110 219v-60h40v60zm100 80v-173l40 40v133zm110 80v-143l40 40v103zm40-189-40-39v-152h40zm110 109-40-39v-181h40zm60-80v-60h40v60z" /></svg>;
export default MaterialVoiceChatOff;