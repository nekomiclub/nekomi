import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageview: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M675-160H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18h-60.36L557-367q-21 18-45 26t-51 8q-70 0-120.5-49T290-502.5t50.5-120T461-671t118.5 48.5T628-502q0 25.2-7.5 47.6T599-410l186 190h35v-520H140v520h475zM537.5-424q30.5-31 30.5-78.5t-30.5-78T461-611t-78.5 30.5-32.5 78 32.5 78.5 78.5 31 76.5-31M140-220v-520z" /></svg>;
export default MaterialPageview;