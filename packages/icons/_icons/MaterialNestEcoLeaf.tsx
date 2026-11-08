import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestEcoLeaf: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-164q-58.53 0-110.26-19.5Q318-203 276-238l-62 61q-9 9-20.5 9t-20.5-9-9-20.5 9-20.5l61-62q-35.34-42.16-54.67-93.58T160-484q0-134 93-227t227-93h320v320q0 134-93 227t-227 93m0-60q108.33 0 184.17-75.83Q740-375.67 740-484v-260H480q-108.33 0-184.17 75.83Q220-592.33 220-484q0 45.74 15 87.37T276-322l217-216q9-9 20.5-9t20.5 9q9 8.8 9 20.9t-9 21.1L318-280q33 26 74.63 41T480-224m0-260" /></svg>;
export default MaterialNestEcoLeaf;