import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArticleShortcut: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-279h192v-60H360zm0-171h323v-60H360zm-83-171h406v-60H277zM255-80q-74.84 0-127.42-52T75-259q0-53 27-95.5t72-65.5H80v-60h220v220h-60v-119q-45 5-75 39t-30 80q0 50.18 35 85.09T255-140zm105-40v-60h420v-600H180v240h-60v-240q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialArticleShortcut;