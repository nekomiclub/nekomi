import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatTextdirectionVertical: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M245-239v-209q-68 0-116.5-45T80-604t49-110.5T245-759h300v60h-80v460h-60v-460H305v460zm485 79L581-311l42-42 77 78v-484h60v484l77-78 43 42zM245-508v-191q-42 0-73.5 27T140-603.5t31.5 68.5 73.5 27m0-96" /></svg>;
export default MaterialFormatTextdirectionVertical;