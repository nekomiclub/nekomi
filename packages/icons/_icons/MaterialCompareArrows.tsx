import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCompareArrows: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m317-160-42-42 121-121H80v-60h316L275-504l42-42 193 193zm326-254L450-607l193-193 42 42-121 121h316v60H564l121 121z" /></svg>;
export default MaterialCompareArrows;