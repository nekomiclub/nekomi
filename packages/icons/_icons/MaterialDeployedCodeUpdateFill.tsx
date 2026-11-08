import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeployedCodeUpdateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m740-76 113-113-21-21-77 77v-171h-30v171l-77-77-21 21zM480-514 213-669l-33 19v31l300 173 300-174v-30l-34-19zM450-85 150-258q-14-8-22-22t-8-30v-340q0-16 8-30t22-22l300-173q14-8 30-8t30 8l300 173q14 8 22 22t8 30v236q-25-13-53-19.5t-57-6.5q-102 0-176 73.5T480-189q0 29 6.5 56T505-82q-14 6-28 5.5T450-85m146 29.5Q540-111 540-189q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T730 0 596-55.5" /></svg>;
export default MaterialDeployedCodeUpdateFill;