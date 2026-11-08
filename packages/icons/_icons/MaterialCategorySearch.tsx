import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCategorySearch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-145v-304h304v304zm60-60h184v-184H140zm81-361 220-354 220 354zm108-60h224L441-807zM870-51 769-152q-22 15-48.11 23.5T666-120q-74 0-124-50t-50-124 50-124 124-50 124 50 50 124q0 28-7.52 52.5T811-196L913-94zM747-213.08q33-33.09 33-81Q780-342 746.92-375q-33.09-33-81-33Q618-408 585-374.92q-33 33.09-33 81Q552-246 585.08-213q33.09 33 81 33Q714-180 747-213.08M441-626" /></svg>;
export default MaterialCategorySearch;