import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConvertToTextFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-60h94q-45-23-72-65.5T75-301q0-75 52.5-127T255-480v60q-50 0-85 35t-35 85q0 46 30 80t75 39v-119h60v220zm197-541h406v-60H277zm83 501v-159h192v-60H360v-111h323v-60H360v-30H120v-240q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialConvertToTextFill;