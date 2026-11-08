import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAcuteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-160q-134 0-227-93t-93-227 93-227 227-93 227 93 93 227-93 227-227 93m102-177 42-42-114-114v-147h-60v172zM80-610v-60h160v60zM40-450v-60h200v60zm40 160v-60h160v60z" /></svg>;
export default MaterialAcuteFill;