import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMore: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-160q-14.25 0-27-6.38-12.75-6.37-21-17.62L80-480l221-296q8.25-11.25 21-17.63 12.75-6.37 27-6.37h472q24.75 0 42.38 17.62Q881-764.75 881-740v520q0 24.75-17.62 42.37Q845.75-160 821-160zM155-480l195 260h471v-520H350zm269 29q12-12 12-29t-12-29-29-12-29 12-12 29 12 29 29 12 29-12m152 0q12-12 12-29t-12-29-29-12-29 12-12 29 12 29 29 12 29-12m152 0q12-12 12-29t-12-29-29-12-29 12-12 29 12 29 29 12 29-12m-142-29" /></svg>;
export default MaterialMore;