import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNordicWalking: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m168-40 80-350h41L209-40zm110 0 117-589-102 46v133h-60v-173l191-81q26-11 59.5-6t50.5 31l42 66q26 42 72.5 72.5T753-510v60q-67 0-121-31t-96-91l-41 156 92 83v293h-60v-240l-108-98-79 338zm262-707q-30 0-51.5-21.5T467-820t21.5-51.5T540-893t51.5 21.5T613-820t-21.5 51.5T540-747M713-40v-350h40v350z" /></svg>;
export default MaterialNordicWalking;