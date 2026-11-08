import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCellMerge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-130v-220h60v160h160v60zm480 0v-60h160v-160h60v220zM287-341l-43-42 67-67H90v-60h221l-67-67 43-42 139 139zm386 0L534-480l139-139 43 42-67 67h221v60H649l67 67zM130-610v-220h220v60H190v160zm640 0v-160H610v-60h220v220z" /></svg>;
export default MaterialCellMerge;