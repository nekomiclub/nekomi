import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMealDinnerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M315-409q-98 0-166.5-68.5T80-644q0-97 66-165.5T309-880h-1q-17 25-26 53.5t-9 58.5q0 81 57 138.5T468-572q19 0 37.5-3.5T542-586q-20 78-83 127.5T315-409m400-101h104v-145H715zM40-80v-60h89q-3-6-5.5-12t-4.5-13L84-304h464l-34 139q-2 7-4.5 13t-5.5 12h233v-149q-35-14-58.5-42.5T655-398v-317h224v317q0 38-23.5 66.5T797-289v149h123v60z" /></svg>;
export default MaterialMealDinnerFill;