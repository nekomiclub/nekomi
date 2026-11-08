import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccessibility: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M428.5-755.42q-21.5-21.42-21.5-51.5t21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5-51.58-21.42M372-80v-533H120v-60h720v60H588v533h-60v-260h-96v260z" /></svg>;
export default MaterialAccessibility;