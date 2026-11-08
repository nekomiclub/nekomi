import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAcute: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-160q-134 0-227-93t-93-227 93-227 227-93 227 93 93 227-93 227-227 93m-.24-60Q708-220 784-295.76q76-75.77 76-184Q860-588 784.24-664q-75.77-76-184-76Q492-740 416-664.24q-76 75.77-76 184Q340-372 415.76-296q75.77 76 184 76M702-337l42-42-114-114v-147h-60v172zM80-610v-60h160v60zM40-450v-60h200v60zm40 160v-60h160v60zm520-190" /></svg>;
export default MaterialAcute;