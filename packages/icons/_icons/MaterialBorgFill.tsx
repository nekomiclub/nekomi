import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBorgFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-88 150-260q-15-8-22.5-21.8-7.5-13.79-7.5-30.2v-138h206v123h124zM120-510v-138q0-16.41 7.5-30.2Q135-692 150-700l300-172v239H326v123zm266 123v-186h187v186zM510-88v-239h123v-123h207v138q0 16.34-7.87 30.09Q824.25-268.17 810-260zm123-422v-123H510v-239l300 172q14.25 8.17 22.13 21.91Q840-664.34 840-648v138z" /></svg>;
export default MaterialBorgFill;