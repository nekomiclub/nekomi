import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpellcheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M563-80 404-239l42-42 117 117 240-240 42 42zM120-312l200-527h66l200 527h-67l-54-142H238l-54 142zm137-200h189l-92-254h-5z" /></svg>;
export default MaterialSpellcheckFill;