import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWidgetMenuFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M346-244q43 0 73-30t30-72q0-43-30-73t-73-30q-42 0-72 30t-30 73q0 42 30 72t72 30m268 0q43 0 73-30t30-72q0-43-30-73t-73-30q-42 0-72 30t-30 73q0 42 30 72t72 30m-268-60q-17 0-29.5-12.5T304-346t12.5-30 29.5-13 30 13 13 30-13 29.5-30 12.5m268 0q-17 0-29.5-12.5T572-346t12.5-30 29.5-13 30 13 13 30-13 29.5-30 12.5M336-533h289q38 0 65-27t27-65-27-65-65-27H336q-38 0-65 27t-27 65 27 65 65 27m0-60q-14 0-23-9t-9-23 9-23 23-9h289q14 0 23 9t9 23-9 23-23 9zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialWidgetMenuFill;