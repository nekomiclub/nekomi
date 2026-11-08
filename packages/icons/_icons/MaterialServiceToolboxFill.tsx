import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialServiceToolboxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-189h204v46h60v-46h272v46h60v-46h204v189q0 24.75-17.62 42.37Q844.75-160 820-160zM91-469l93-226q9-15 23.92-24.5T240-729h64v-51q0-24.75 17.63-42.38Q339.25-840 364-840h231q24.75 0 42.38 17.62Q655-804.75 655-780v51h64q17.16 0 32.08 9.5T775-695l94 226H676v-46h-60v46H344v-46h-60v46zm273-260h231v-51H364z" /></svg>;
export default MaterialServiceToolboxFill;