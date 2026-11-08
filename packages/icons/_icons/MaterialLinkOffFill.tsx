import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLinkOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m750-291-49-49q51-10 85-48t34-89q0-58-41-99t-99-41H525v-60h155q83 0 141.5 58.5T880-477q0 62-36 112t-94 74M594-447l-60-60h101v60zM814-56 63-807l43-43L857-99zM450-280H280q-83 0-141.5-58.5T80-480q0-72 44.5-127T238-676l56 56h-14q-58 0-99 41t-41 99 41 99 99 41h170zM325-450v-60h79l60 60z" /></svg>;
export default MaterialLinkOffFill;