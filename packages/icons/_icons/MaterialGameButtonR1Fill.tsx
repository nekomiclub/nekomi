import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonR1Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M880-800v486q0 64-44.5 109T727-160H233q-64 0-108.5-45T80-314v-486zM622-339h48v-282h-40l-91 72 25 33 58-47zm-331 1h50v-109h43l64 109h58l-77-124q26-11 39-29t13-44q0-41-26-62.5T378-619h-87zm50-153v-83h35q26 0 40 11t14 31-15 30.5-44 10.5z" /></svg>;
export default MaterialGameButtonR1Fill;