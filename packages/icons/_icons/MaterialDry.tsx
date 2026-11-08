import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDry: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M619-650q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T643-791q24 32 32 64.5t1 76.5zm160 0q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T803-791q24 32 32 64.5t1 76.5zM230-80q-63 0-106.5-43.5T80-230v-216q0-28 13.5-53t36.5-40l324-209 20 20q15 15 17.5 35.5T483-654l-59 94h346q13 0 21.5 8.5T800-530q0 12-8.5 21t-21.5 9H316l91-147-244 159q-11 7-17 18t-6 24v216q0 37 26.5 63.5T230-140h500q13 0 21.5 8.5T760-110q0 12-8.5 21T730-80zm250-280v-60h370q13 0 21.5 8.5T880-390q0 12-8.5 21t-21.5 9zm0 140v-60h330q13 0 21.5 8.5T840-250q0 12-8.5 21t-21.5 9zM310-360" /></svg>;
export default MaterialDry;