import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRule: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m576-160-42-42 111-111-111-111 42-42 111 111 111-111 42 42-111 111 111 111-42 42-111-111zm83-374L517-676l42-42 100 99 179-179 42 43zM80-290v-60h360v60zm0-320v-60h360v60z" /></svg>;
export default MaterialRule;