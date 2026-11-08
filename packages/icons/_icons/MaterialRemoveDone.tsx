import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRemoveDone: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M856-88 581-364 467-250 243-474l43-43 181 181 71-71-430-429 43-43 748 748zM297-250 73-474l43-43 181 181 43 43zm369-199-43-43 228-228 43 43zm-85-85-43-43 143-143 43 43z" /></svg>;
export default MaterialRemoveDone;