import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnsubscribeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-463 340-217v-60L480-527 140-740v60zM640.5-94Q586-148 586-226t54.5-133T773-414t132.5 55T960-226 905.5-94 773-40 640.5-94M660-210h226v-40H660zm-520 50q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v291q-25-13-52-19t-55-6q-104 0-175.5 74.5T526-220q0 15 2 30t7 30z" /></svg>;
export default MaterialUnsubscribeFill;