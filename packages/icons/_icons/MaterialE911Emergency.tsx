import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialE911Emergency: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-160v-60h61l84-277q6-19 21.5-31t35.5-12h136q20 0 35.5 12t21.5 31l84 277h61v60zm125-60h290l-78-260H413zm115-440v-180h60v180zm235 98-43-43 128-127 42 42zm55 192v-60h180v60zM275-562 148-690l42-42 128 127zM40-370v-60h180v60zm440 150" /></svg>;
export default MaterialE911Emergency;