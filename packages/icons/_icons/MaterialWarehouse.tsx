import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWarehouse: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-180h120v-320h440v320h120v-460L480-776 140-640zm-60 60v-560l400-160 400 160v560H640v-320H320v320zm290 0v-60h60v60zm80-120v-60h60v60zm80 120v-60h60v60zM260-500h440z" /></svg>;
export default MaterialWarehouse;