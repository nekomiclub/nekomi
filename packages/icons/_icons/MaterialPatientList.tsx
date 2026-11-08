import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPatientList: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M555.5-436.5Q522-470 522-521t33.5-84.5T640-639t84.5 33.5T758-521t-33.5 84.5T640-403t-84.5-33.5M400-160v-66q0-19 9-36t24-24q45-32 98.5-47.5T640-349t108 17 99 46q14 10 23.5 25.5T880-226v66zm55-71v11h370v-11q-39-26-90-42t-95-16-95.5 16-89.5 42m227-248q16-16 16-42t-16-42-42-16-42 16-16 42 16 42 42 16 42-16m-562 69v-60h306v60zm0-330v-60h473v60zm349 165H120v-60h380q-11 13-18.5 28T469-575" /></svg>;
export default MaterialPatientList;