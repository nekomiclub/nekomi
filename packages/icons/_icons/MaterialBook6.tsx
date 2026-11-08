import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBook6: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h420v620H240q-25.5 0-42.75 17.5T180-200t17.25 42.5T240-140h540v-660h60v720zm0-240h360v-500H240q-26 0-43 17.25T180-760v457q13-8 27.88-12.5Q222.77-320 240-320m20-100h49l25-71h113l25 71h49L415.32-700H365zm88-112 41.49-116h2.02L433-532zM180-303v-517z" /></svg>;
export default MaterialBook6;