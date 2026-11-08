import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsBaseballFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M171-223q-45-56-68-122T80-480q0-70 23-136t68-122q61 46 95 114t34 144q0 75-34 143t-95 114m168 118.5Q270-129 216-179q69-56 107-134.5T361-480t-38-167-107-134q54-50 123-74.5T480-880t141 24.5T744-781q-69 55-107 134t-38 167 38 166.5T744-179q-54 50-123 74.5T480-80t-141-24.5M789-223q-61-46-94.5-114T661-480q0-76 33.5-144T789-738q45 56 68 122t23 136q0 69-23 135t-68 122" /></svg>;
export default MaterialSportsBaseballFill;