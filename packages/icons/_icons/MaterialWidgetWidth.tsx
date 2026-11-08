import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWidgetWidth: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-224h224v224zm288 0v-224h224v224zm288 0v-224h224v224zM80-368v-224h224v224zm288 0v-224h224v224zm288 0v-224h224v224zM80-656v-224h800v224zm348 412h104zM244-428v-104zm472 0v-104zM140-140h104v-104H140zm288 0h104v-104H428zm288 0h104v-104H716zM140-428h104v-104H140zm288 0h104v-104H428zm288 0h104v-104H716z" /></svg>;
export default MaterialWidgetWidth;