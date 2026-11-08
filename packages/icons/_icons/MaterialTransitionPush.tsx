import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTransitionPush: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M338-160v-59h82v-521h-82v-60h82q24 0 42 18t18 42v520q0 24-18 42t-42 18zm282 0q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h240q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-59h240v-521H620zM212-330l-43-42 76-78H40v-60h205l-76-76 42-42 149 148zm408 111v-521z" /></svg>;
export default MaterialTransitionPush;