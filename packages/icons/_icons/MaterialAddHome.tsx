import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddHome: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M718-180h33v-110h110v-33H751v-110h-33v110H608v33h110zm14.5 60Q655-120 600-175.5T545-307q0-78.43 54.99-133.72Q654.98-496 733-496q77 0 132.5 55.28Q921-385.43 921-307q0 76-55.5 131.5t-133 55.5M160-200v-480l320-240 320 240v134q-14-5-29-7t-31-3v-94L480-845 220-650v390h270q2.6 15.84 7.8 30.92T510-200zm320-353" /></svg>;
export default MaterialAddHome;