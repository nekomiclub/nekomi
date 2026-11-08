import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m318-763-34-101 38-13 34 101zm142-47v-100h40v100zm182 47-38-13 34-101 38 13zM876-39 664-72q-31-5-54.5-25T576-147l-33-106q-12-38 2-75t46-55l52 161 27-9-89-278q-12-38 2-74t48-56l41-22 172 324q6 13 18 20t26 7h24zM84-39 48-310h24q14 0 26-7t18-20l172-324 41 22q34 20 48 56t2 74l-89 278 27 9 52-161q32 18 46 55t2 75l-33 106q-10 30-33.5 50T296-72z" /></svg>;
export default MaterialCheerFill;