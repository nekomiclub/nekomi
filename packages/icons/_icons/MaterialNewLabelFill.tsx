import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNewLabelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M409-160q15-25 23-52.88 8-27.87 8-57.12 0-87.5-61.25-148.75T230-480q-42.52 0-81.26 16.5T80-417v-323q0-24.75 17.63-42.38Q115.25-800 140-800h471q14.25 0 27 6.37 12.75 6.38 21 17.63l222 296-221 296q-8.25 11.25-21 17.62-12.75 6.38-27 6.38zm-209 40v-120H80v-60h120v-120h60v120h120v60H260v120z" /></svg>;
export default MaterialNewLabelFill;