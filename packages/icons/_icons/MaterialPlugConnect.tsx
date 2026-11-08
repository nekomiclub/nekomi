import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlugConnect: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-160v-41h-48q-46.67 0-79.33-32.5Q120-266 120-314v-136H40v-60h80v-135q0-48 32.67-80.5Q185.33-758 232-758h48v-42h60v640zm-48.42-101H280v-437h-48.42q-20.58 0-36.08 15.5T180-645v331q0 22 15.5 37.5t36.08 15.5M620-160v-165H440v-60h180v-189H440v-60h180v-166h60v42h48q46.67 0 79.33 32.5Q840-693 840-645v135h80v60h-80v136q0 48-32.67 80.5Q774.67-201 728-201h-48v41zm60-101h48q22.1 0 37.05-15.5T780-314v-331q0-22-14.95-37.5T728-698h-48zm0-219" /></svg>;
export default MaterialPlugConnect;