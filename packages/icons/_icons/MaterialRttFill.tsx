import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRttFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m375-120 13-82h93l89-556H439l-33 200h-85l46-282h518l-46 282h-85l32-200H655l-89 556h93l-13 82zM154-700l10-60h129l-10 60zm-26 165 10-60h129l-10 60zM75-205l10-60h229l-9 60zm27-165 10-60h229l-10 60z" /></svg>;
export default MaterialRttFill;