import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBathtubFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M221.5-620.5Q200-642 200-672t21.5-51.5T273-745t51.5 21.5T346-672t-21.5 51.5T273-599t-51.5-21.5M186-80q-18 0-32-11.5T140-120q-25 0-42.5-17.5T80-180v-260h120v-28q0-35 25-60t60-25q19 0 36 7t30 21l52 59q7 8 14.5 14.5T433-440h307v-334q0-19-12.5-32.5T696-820q-10 0-19 2t-16 9l-52 52q5 17 1.5 34.5T598-689l-102-97q16-11 35-14t37 4l52-51q15-15 34.5-24t41.5-9q44 0 74 31t30 75v334h80v260q0 25-17.5 42.5T820-120q0 17-14 28.5T773-80z" /></svg>;
export default MaterialBathtubFill;