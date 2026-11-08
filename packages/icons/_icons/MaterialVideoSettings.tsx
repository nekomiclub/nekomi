import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoSettings: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M513-140H140q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h694q24 0 42 18t18 42v246h-60v-246H140v540h373zM395-297v-346l263 173zM730-40l-5-48q-20-6-41-17.5T650-131l-42 20-35-54 38-30q-5-23-5-41.5t5-41.5l-38-30 35-55 42 20q13-12 34-24t41-18l5-49h60l6 49q20 6 41 18t34 24l42-20 35 55-38 30q5 23 5 41.5t-5 41.5l38 30-35 54-42-20q-13 14-34 25.5T796-88l-6 48zm30-95q44 0 73-29t29-73-29-73-73-29-73 29-29 73 29 73 73 29" /></svg>;
export default MaterialVideoSettings;