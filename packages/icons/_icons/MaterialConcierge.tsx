import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConcierge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M400-80v-60h520v60zm40-120q0-81 51-141.5t129-74.25v-24.55q0-16.7 11.5-28.2T660-480t28.5 11.5T700-440v24.36Q777-402 828.5-341.5T880-200zm71-60h297q-18-44-58-72t-89.79-28Q609-360 569-332t-58 72M40-442v-394h215v57l311-89 314 96v47q0 37.5-30 63.75T782-635H668q0 19-23.5 54.5T604-538l-255 96zm60-60h94v-274h-94zm155 0h84l245-93q9-3 14.5-17t5.5-23h-77l-115 38-22-58 129-40h263q14 0 25-9.75T818-728l-256-78-307 90z" /></svg>;
export default MaterialConcierge;