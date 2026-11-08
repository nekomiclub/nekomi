import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddModeratorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M693-80q-78 0-133-55.5T505-267q0-78 55-133.5T693-456q77 0 132.5 55.5T881-267q0 76-55.5 131.5T693-80m-213 0q-138-32-229-156.5T160-522v-239l320-120 320 120v270q-25-12-52-18.5t-55-6.5q-103 0-175.5 73T445-267q0 48 19.5 94T518-93q-9 5-19 7.5T480-80m198-80h33v-90h90v-33h-90v-90h-33v90h-90v33h90z" /></svg>;
export default MaterialAddModeratorFill;