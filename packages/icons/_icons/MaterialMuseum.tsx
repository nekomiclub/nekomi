import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMuseum: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-60h83v-411H80v-47l400-282 400 282v47h-82v411h82v60zm143-60h515zm101-101h60v-184l96 145 97-145v184h60v-274h-65l-92 140-92-140h-64zm414 101v-485L480-806 223-625v485z" /></svg>;
export default MaterialMuseum;