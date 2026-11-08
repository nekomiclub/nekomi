import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditArrowUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M762-160v-526l-57 57-42-42 129-129 128 129-42 42-56-56v525zm-642-84v-154l309-310q18-18 43-18t42 18l68 69q17 17 17 42t-17 42L273-244zm60-60h69l178-181-34-34-34-34-179 179zm291-223-68-69z" /></svg>;
export default MaterialEditArrowUp;