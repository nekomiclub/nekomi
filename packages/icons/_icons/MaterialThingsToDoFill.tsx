import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThingsToDoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h162v-192h-90v-60h91q5-84 61-139t146-65v-204h268v146H510v58q90 10 146 65t61 139h91v60h-90v192h162v60zm222-60h148v-192H302zm208 0h148v-192H510z" /></svg>;
export default MaterialThingsToDoFill;