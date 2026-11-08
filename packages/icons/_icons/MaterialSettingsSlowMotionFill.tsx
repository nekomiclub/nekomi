import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsSlowMotionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m388-80-20-126q-21-8-40.5-19T291-250l-118 54-93-164 108-79q-2-11-2.5-20.5T185-480t.5-20.5T188-521L80-600l93-164 118 54q17-14 36.5-25t40.5-18l20-127h184l20 126q21 8 40.5 18.5T669-710l118-54 93 164-89 63q-26-12-54-17.5t-57-5.5q-23 0-44.5 3.5T593-545q-18-30-48-47.5T480-610q-54 0-92 38t-38 92q0 35 17.5 64.5T414-368q-7 21-10.5 43t-3.5 45q0 57 21.5 108.5T484-80zm260-3q-65-10-110.5-56T482-250h61q9 39 37.5 68t67.5 38zm60 0v-61q48-10 79-47.5t31-88.5-31-88.5-79-47.5v-61q72 11 121 66.5T878-280t-49 130.5T708-83M482-310q10-65 55.5-111T648-477v61q-39 9-67.5 38T543-310zm156 110v-160l124 80z" /></svg>;
export default MaterialSettingsSlowMotionFill;