import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArticleShortcutFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M255-80q-75 0-127.5-52T75-259q0-53 27-95.5t72-65.5H80v-60h220v220h-60v-119q-45 5-75 39t-30 80q0 50 35 85t85 35zm22-541h406v-60H277zm83 501v-159h192v-60H360v-111h323v-60H360v-30H120v-240q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialArticleShortcutFill;