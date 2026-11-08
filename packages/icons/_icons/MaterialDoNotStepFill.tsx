import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoNotStepFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m713-319-42-42 207-207 42 42zm-70-70L359-673l207-207 284 284zM806-56 558-304 424-170H30v-115q0-23 13-40.5T76-351q17-6 42.5-19t53.5-36l47 47q5 5 11 5t11-5 5-11-5-11l-43-44q8-7 18-17t19-21l43 43q5 5 11 5t11-5q4-4 4.5-10.5T300-442l-45-45q9-11 17.5-24t11.5-23l52 54q5 5 11 5t11-5 5-11.5-4-10.5L56-805l42-43L848-98z" /></svg>;
export default MaterialDoNotStepFill;