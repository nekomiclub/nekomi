import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraswitchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M313-294q-26 0-43-17t-17-43v-252q0-26 17-43t43-17h45l30-30h187l30 30h45q26 0 43 17t17 43v252q0 26-17 43t-43 17zm168-125q26 0 43-17t17-43-17-43-43-17-43 17-17 43 17 43 43 17M370-947q26-7 55-10t56-3q93 0 177 33.5T806.5-834 912-695t49 173h-60q-6-76-41-143t-89.5-118-124-82.5T502-901l76 79-43 40zM591-13q-26 7-55 10t-55 3q-94 0-177.5-33.5T155-126 49-265-1-438h61q6 76 41 143t89.5 118 124 82.5T459-59l-76-79 43-40z" /></svg>;
export default MaterialCameraswitchFill;