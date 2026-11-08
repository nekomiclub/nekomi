import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvWithAssistantFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M448.5-471.5Q460-483 460-500t-11.5-28.5T420-540t-28.5 11.5T380-500t11.5 28.5T420-460t28.5-11.5m120 0Q580-483 580-500t-11.5-28.5T540-540t-28.5 11.5T500-500t11.5 28.5T540-460t28.5-11.5m-240 0Q340-483 340-500t-11.5-28.5T300-540t-28.5 11.5T260-500t11.5 28.5T300-460t28.5-11.5m360 0Q700-483 700-500t-11.5-28.5T660-540t-28.5 11.5T620-500t11.5 28.5T660-460t28.5-11.5M170-120v-80h-30q-25 0-42.5-17.5T80-260v-480q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v480q0 25-17.5 42.5T820-200h-30v80h-23l-26-80H220l-27 80z" /></svg>;
export default MaterialTvWithAssistantFill;