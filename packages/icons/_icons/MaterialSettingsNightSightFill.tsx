import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsNightSightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M538.5-138.5Q480-197 480-280t58.5-141.5T680-480t141.5 58.5T880-280t-58.5 141.5T680-80t-141.5-58.5M768-194q5-5 2.5-12t-9.5-8q-26-5-48.5-19.5T676-272t-15.5-51 7.5-52q2-7-2.5-12.5T654-391q-67 12-91.5 76T582-196q35 44 92 45t94-43M388-80l-20-126q-21-8-40.5-19T291-250l-118 54-93-164 108-79q-2-11-2.5-20.5T185-480t.5-20.5T188-521L80-600l93-164 118 54q17-14 36.5-25t40.5-18l20-127h184l20 126q21 8 40.5 18.5T669-710l118-54 93 164-89 63q-26-12-54-17.5t-57-5.5q-23 0-44.5 3.5T593-545q-18-30-48-47.5T480-610q-54 0-92 38t-38 92q0 35 17.5 64.5T414-368q-7 21-10.5 43t-3.5 45q0 57 21.5 108.5T484-80z" /></svg>;
export default MaterialSettingsNightSightFill;