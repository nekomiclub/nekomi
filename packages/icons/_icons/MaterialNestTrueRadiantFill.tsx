import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestTrueRadiantFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M153-152.67q-33-32.66-33-79.33v-408h60v408q0 22.1 15.5 37.05T233.07-180t37-14.95T285-232v-495q0-47.08 32.94-80.04t80-32.96 79.56 32.96T510-727v495q0 22.1 15.5 37.05T563.07-180t37-14.95T615-232v-495q0-47.08 32.94-80.04t80-32.96 79.56 32.96T840-727v407h-60v-407q0-22-14.93-37.5t-37-15.5-37.57 15.5T675-727v495q0 46.67-32.74 79.33Q609.53-120 562.76-120 516-120 483-152.67q-33-32.66-33-79.33v-495q0-22-14.93-37.5t-37-15.5-37.57 15.5T345-727v495q0 46.67-32.74 79.33Q279.53-120 232.76-120 186-120 153-152.67" /></svg>;
export default MaterialNestTrueRadiantFill;