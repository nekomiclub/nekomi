import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material2d2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M162-282v-66q47-37 83-65.5t56-52.5q17-20 28-44t11-53q0-34-16.5-48T275-625q-28 0-43 16.5T213-564l-57-5q4-45 32-80t88-35 92 29.5 32 86.5q0 38-15 71t-38 63-51 51-58 42h169v59zm320 0v-394h131q91 0 139.5 51.5T801-479t-49.5 145.5T613-282zm60-60h70q66 0 98-33.5T742-479t-32-103.5-98-33.5h-70z" /></svg>;
export default Material2d2;