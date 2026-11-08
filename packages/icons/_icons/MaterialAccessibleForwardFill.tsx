import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccessibleForwardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M313.19-80Q234-80 177-137t-57-136 57-136 136-57v60q-54 0-93.5 39.5T180-273t39.5 93.5T313-140t92.5-37.5T444-284h60q0 93-55.81 148.5-55.82 55.5-135 55.5M687-120v-194H430q-49 0-73.5-38t-4.5-81l86-189h-94l-27 73-60-20 28-75q7-17 19.5-27.5t34.64-10.5H531q40 0 62.5 32t6.5 66l-90 191h162q30.94 0 52.97 22.03T747-318v198zM580.5-735.42q-21.5-21.42-21.5-51.5t21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5-51.58-21.42" /></svg>;
export default MaterialAccessibleForwardFill;