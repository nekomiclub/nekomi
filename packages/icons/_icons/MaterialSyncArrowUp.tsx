import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSyncArrowUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M98-181v-60h75q-61-42-95.5-106.5T43-486q0-106 66-186.5T278-774v62q-78 20-126.5 82.5T103-486q0 63 30.5 117.5T218-283v-78h60v180zm300-15v-62q78-20 126.5-83.5T573-486q0-63-31-116t-84-85v83h-60v-180h180v60h-67q57 43 89.5 105T633-486q0 106-66 188T398-196m364 36v-526l-57 57-42-42 129-129 128 129-42 42-56-56v525z" /></svg>;
export default MaterialSyncArrowUp;