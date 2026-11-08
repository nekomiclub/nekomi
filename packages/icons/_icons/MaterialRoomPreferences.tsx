import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoomPreferences: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h92v-660h390v45h147v261h-60v-201h-87v272h-60v-317H272v600h206v60zm575 40-5-48q-20-6-41-17.5T615-171l-42 20-35-54 38-30q-5-23-5-41.5t5-41.5l-38-30 35-55 42 20q13-12 34-24t41-18l5-49h60l6 49q20 6 41 18t34 24l42-20 35 55-38 30q5 23 5 41.5t-5 41.5l38 30-35 54-42-20q-13 14-34 25.5T761-128l-6 48zm30-95q44 0 73-29t29-73-29-73-73-29-73 29-29 73 29 73 73 29M422.5-451.5Q411-463 411-480t11.5-28.5T451-520t28.5 11.5T491-480t-11.5 28.5T451-440t-28.5-11.5M272-180v-600z" /></svg>;
export default MaterialRoomPreferences;