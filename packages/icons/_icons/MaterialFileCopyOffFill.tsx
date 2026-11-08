import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileCopyOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M840-201 200-841v-19q0-24 18-42t42-18h348l232 232zm-6 161L714-160H260q-24 0-42-18t-18-42v-454L41-833l43-43L877-83zM578-662h222L578-880l222 218-222-218zM140-40q-24 0-42-18t-18-42v-579h60v579h538v60z" /></svg>;
export default MaterialFileCopyOffFill;