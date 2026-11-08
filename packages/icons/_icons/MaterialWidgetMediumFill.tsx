import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWidgetMediumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-224h224v224zm288 0v-224h224v224zm288 0v-224h224v224zM80-368v-224h224v224zm288 0v-224h224v224zm288 0v-224h224v224zM80-656v-224h512v224zm576 0v-224h224v224z" /></svg>;
export default MaterialWidgetMediumFill;