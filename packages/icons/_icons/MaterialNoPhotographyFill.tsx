import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoPhotographyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-79-79H140q-25 0-42.5-17.5T80-180v-513q0-25 17.5-42.5T140-753h67v86L26-848l43-43L876-84zm47-125L646-400q8-43-3-84.5T601-557t-72.5-41.5T444-602L290-756l70-84h240l73 87h147q25 0 42.5 17.5T880-693zM480-266q26 0 51-7.5t47-22.5L340-534q-15 22-22.5 47t-7.5 51q0 71 49.5 120.5T480-266m0-60q-46 0-78-32t-32-78q0-22 8-42t24-36l156 156q-16 16-36 24t-42 8" /></svg>;
export default MaterialNoPhotographyFill;