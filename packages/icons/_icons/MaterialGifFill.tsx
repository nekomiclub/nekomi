import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGifFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M468-360v-240h48v240zm-234 0q-15.3 0-24.65-9.5T200-394v-172q0-15 9.35-24.5T234-600h124q15.3 0 24.65 9.5T392-566v14H248v144h96v-72h48v86q0 15-9.35 24.5T358-360zm354 0v-240h172v48H636v60h81v48h-81v84z" /></svg>;
export default MaterialGifFill;