import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoneyOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M577-623q-14-34-40-53t-62-19q-31 0-55 10.5T379-654l-42-42q21-24 48.5-38t58.5-18v-88h60v87q42 5 76.5 30.5T635-649zM806-56 614-248q-22 21-50.5 31T504-205v85h-60v-86q-57-8-95-45.5T295-343l60-21q14 51 45.5 76t79.5 25q26 0 50.5-6.5T570-292L57-805l43-43L849-99z" /></svg>;
export default MaterialMoneyOffFill;