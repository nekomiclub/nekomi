import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTamperDetectionOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-211v-60h220v-520H140v180H80v-180q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720-486v215q0 24-18 42t-42 18zm-286.76 50q-11.24 0-22.74-5T111-179L8-282l4-3q5-5 11.5-8.5T38-297q10 0 18 2.5T71-284l39 39v-246q0-8.67 6.07-14.33 6.07-5.67 14.16-5.67 8.77 0 14.27 5.67 5.5 5.66 5.5 14.33v120h30v-180q0-8.67 6.07-14.33 6.07-5.67 14.16-5.67 8.77 0 14.27 5.67 5.5 5.66 5.5 14.33v180h30v-140q0-8.67 6.07-14.33 6.07-5.67 14.16-5.67 8.77 0 14.27 5.67 5.5 5.66 5.5 14.33v140h30v-100q0-8.67 6.07-14.33 6.07-5.67 14.16-5.67 8.77 0 14.27 5.67 5.5 5.66 5.5 14.33v250q0 25-17.25 42.5T300-161zM660-791v520z" /></svg>;
export default MaterialTamperDetectionOn;