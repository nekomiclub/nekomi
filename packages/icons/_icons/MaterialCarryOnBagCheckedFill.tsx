import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarryOnBagCheckedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m698-150 141-142-28-28-113 114-59-60-28 29zM587.5-97.5Q531-154 531-235t56.5-137.5T725-429t137.5 56.5T919-235 862.5-97.5 725-41 587.5-97.5M368-135v-529h205v-156h-23q-26 0-43.5-17.5T489-880h144v404q-74 31-118 96t-44 145q0 26 4 51t13 49zm-76 0q-25 0-42.5-17.5T232-195v-409q0-25 17.5-42.5T292-664h46v529z" /></svg>;
export default MaterialCarryOnBagCheckedFill;