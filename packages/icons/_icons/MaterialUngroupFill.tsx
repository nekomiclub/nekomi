import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUngroupFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m348-306-42-42 182-182H330v-60h260v260h-60v-158zm432-174v-300H480v-60h360v360zM180-120q-24 0-42-18t-18-42v-660h60v660h660v60z" /></svg>;
export default MaterialUngroupFill;