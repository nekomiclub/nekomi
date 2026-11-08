import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMealLunchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M81-450v-101h60v101zm291-96-71-71 42-43 72 72zM81-655v-225h224v30q0 81-56.5 138T111-655zm328-165v-60h101v60zM40-80v-60h89q-3-6-5.5-12t-4.5-13L84-304h464l-34 139q-2 7-4.5 13t-5.5 12h66l54-224H508l-16-187h386l-34 411h76v60z" /></svg>;
export default MaterialMealLunchFill;