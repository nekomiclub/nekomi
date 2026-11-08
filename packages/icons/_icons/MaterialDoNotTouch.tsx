import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoNotTouch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m840-206-60-60v-504q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38zM340-705l-60-60v-45q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38zm167 166-60-59v-292q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38zm167 59h-60v-370q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38zm77 357L340-534v252L166-410l195 288q7 11 17.5 16.5T402-100h288q16.9 0 32.95-6T751-123M402-40q-27 0-51.5-12.5T311-88L54-468l20-16q17-15 39.5-19t44.57 13.19L280-397v-197L26-848l43-43L876-84l-43 43-40-40q-20 19-46.56 30T690-40zm164-440" /></svg>;
export default MaterialDoNotTouch;