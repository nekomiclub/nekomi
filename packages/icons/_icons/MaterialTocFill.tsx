import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTocFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-60h550v60zm0-170v-60h550v60zm0-170v-60h550v60zm689.5 340q-12.5 0-21-8.63-8.5-8.62-8.5-21.37 0-12 8.63-21 8.62-9 21.37-9 12 0 21 9t9 21.5-9 21-21.5 8.5m0-170q-12.5 0-21-8.63-8.5-8.62-8.5-21.37 0-12 8.63-21 8.62-9 21.37-9 12 0 21 9t9 21.5-9 21-21.5 8.5m0-170q-12.5 0-21-8.63-8.5-8.62-8.5-21.37 0-12 8.63-21 8.62-9 21.37-9 12 0 21 9t9 21.5-9 21-21.5 8.5" /></svg>;
export default MaterialTocFill;