import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStyleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m152-145-23-7q-32-14-43.5-48t6.5-67l60-136zm186 78q-34 0-58-24t-24-58v-207l92 262q2 8 6 14t10 13zm188-24q-21 9-44-4t-33-36L258-650q-10-23 2-45t37-32l318-115q23-8 45 4t32 36l191 513q7 25-3 49t-35 33zm-61-504q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialStyleFill;