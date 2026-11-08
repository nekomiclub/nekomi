import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialList: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M290-620v-60h550v60zm0 170v-60h550v60zm0 170v-60h550v60zM150-620q-12 0-21-9t-9-21.5 9-21 21.5-8.5 21 8.62q8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9m0 170q-12 0-21-9t-9-21.5 9-21 21.5-8.5 21 8.62q8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9m0 170q-12 0-21-9t-9-21.5 9-21 21.5-8.5 21 8.62q8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9" /></svg>;
export default MaterialList;