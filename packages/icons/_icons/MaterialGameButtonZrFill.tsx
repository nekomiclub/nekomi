import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonZrFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M880-800v486q0 65-45 109.5T727-160H233q-64 0-108.5-44.5T80-314v-486zM260-337h193v-46H319l131-195v-40H261v46h129L260-377zm250 0h50v-109h43l64 109h58l-77-124q26-11 39-29t13-44q0-41-26-62.5T597-618h-87zm50-153v-83h35q26 0 40 11t14 31-15 30.5-44 10.5z" /></svg>;
export default MaterialGameButtonZrFill;