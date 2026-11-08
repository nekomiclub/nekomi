import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOrderPlay: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m682-138 146-91-146-91zM240-620h480v-60H240zM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41M120-81v-699q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v327q-14.17-6.86-29.08-11.43Q796-469 780-472v-308H180v599h310q2.88 18.17 8.94 34.59Q505-130 513-114l-33 33-60-60-60 60-60-60-60 60-60-60zm120-199h252.27q3.73-16 8.23-31t12.5-29H240zm0-170h384q22-11 46-17.5t50-8.5v-34H240zm-60 269v-599z" /></svg>;
export default MaterialOrderPlay;