import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotateVertical: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m456-320 165-440h58l165 440h-55l-44-122H555l-44 122zm114-166h160l-78-222h-4zM226-160 100-286l42-42 54 51v-563h60v563l54-51 42 42z" /></svg>;
export default MaterialTextRotateVertical;