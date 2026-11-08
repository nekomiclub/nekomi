import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLabelImportantFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-160 243.23-320L80-800h527q14.25 0 27 6.37 12.75 6.38 21 17.63l225 296-224 296q-8.25 11.25-21 17.62-12.75 6.38-27 6.38z" /></svg>;
export default MaterialLabelImportantFill;