import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExploreNearbyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M491.5-243q5.5-3 8.5-9l4-9q26-48 65-82t69-79q15-23 23.5-50t8.5-56q0-79-55-135t-133-57q-77-1-133 53t-59 131q-2 32 6.5 61t25.5 53q30 45 70 78.5t64 82.5l4 9q3 6 8.5 9t11.5 3 11.5-3m-68-230.5Q400-497 400-530t23.5-56.5T480-610t56.5 23.5T560-530t-23.5 56.5T480-450t-56.5-23.5M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialExploreNearbyFill;