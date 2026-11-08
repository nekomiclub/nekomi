import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoteStackAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-140v-480q0-25.06 17.5-42.53T340-680h480q24.75 0 42.38 17.62Q880-644.75 880-620v340L680-80H340q-24.75 0-42.37-17.63Q280-115.25 280-140M81-725q-5-25 9.5-44.5T130-794l473-84q25-5 44.5 9t24.5 39l16 90h-60l-14-79-473 83 79 450v83q-20-2-35-15t-19-34zm259 105v480h308l172-172v-308zm210 390h60v-120h120v-60H610v-120h-60v120H430v60h120z" /></svg>;
export default MaterialNoteStackAdd;