import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBedroomChildFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M238-282h50v-63h384v63h50v-164q0-29-18-51t-46-27v-72q0-29-20-49t-49-20H371q-29 0-49 20t-20 49v72q-28 5-46 27t-18 51zm50-113v-51q0-14 9-23t23-9h320q14 0 23 9t9 23v51zm64-132v-88h256v88zM140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18z" /></svg>;
export default MaterialBedroomChildFill;