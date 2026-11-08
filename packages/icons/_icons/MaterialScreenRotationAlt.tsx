import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenRotationAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M501-90 128-462h86l330 330 246-246H652v-60h240v240h-60v-138L586-90q-17.38 17-42.69 17T501-90M68-522v-240h60v138l246-246q17.38-17 42.69-17T459-870l373 372h-86L416-828 170-582h138v60z" /></svg>;
export default MaterialScreenRotationAlt;