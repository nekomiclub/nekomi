import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHiveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m647-496-67-123 67-123h140l67 123-67 123zM410-356l-67-124 67-124h140l67 124-67 124zm0-278-67-123 67-123h140l67 123-67 123zM173-496l-67-123 67-123h140l67 123-67 123zm0 278-67-123 67-123h140l67 123-67 123zM411-80l-68-123 67-123h140l67 123-67 123zm236-138-67-123 67-123h140l67 123-67 123z" /></svg>;
export default MaterialHiveFill;