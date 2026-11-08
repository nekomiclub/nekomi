import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessRookFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-192q76-60 120-133t71-168h-48q-24 0-42-18t-18-42v-247h184v123h106v-123h184v247q0 24-18 42t-42 18h-48q26 95 70.5 168T800-272v192z" /></svg>;
export default MaterialChessRookFill;