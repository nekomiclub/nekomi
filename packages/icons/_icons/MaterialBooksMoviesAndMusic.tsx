import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBooksMoviesAndMusic: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80q-17 0-28.5-11.5T120-120v-582q0-11 9-24t19-17l381-137q18-6 35-3t17 25v115h53q17 0 28.5 11.5T674-703v168h-60v-148H180v543h282l60 60zm167-663h194v-71zm219 602q-56-56-56-139t56-139 139-56 139 56 56 139-56 139-139 56-139-56m82-46 143-93-143-93zm-448 47v-543z" /></svg>;
export default MaterialBooksMoviesAndMusic;