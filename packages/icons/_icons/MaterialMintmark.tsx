import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMintmark: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M532-120v-60h206L532-386v-83l247 247v-206h61v308zM249-284v-42H122v-60h248v-146H182q-26 0-43-17t-17-43v-146q0-26 17-43t43-17h67v-42h60v42h122v60H182v146h188q26 0 43.5 17t17.5 43v146q0 26-17.5 43T370-326h-61v42z" /></svg>;
export default MaterialMintmark;