import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardExternalInputFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M203-510v60h60v-60zm124 0v60h60v-60zm123 0v60h60v-60zM203-635v60h60v-60zm124 0v60h60v-60zm123 0v60h60v-60zm124 0v60h60v-60zm123 0v60h60v-60zm37 551-42-42 73-74H584v-60h181l-73-74 42-42 146 146zM486-200H140q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v267q-27-20-58.5-31.5T757-479v-31h-60v33q-17 2-32.5 6.5T634-459v-51h-60v60h42q-23 12-42 28.5T539-385H300v60h203q-9 22-13.5 45.5T485-230v15q0 7 1 15" /></svg>;
export default MaterialKeyboardExternalInputFill;