import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusBrush: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-326q-100 0-170-70.5T240-566q0-48 17-94t50.5-90 84.5-86.5T511-920q3 47 30.5 91t75.5 82q51 41 77 86.5t26 94.5q0 99-70 169.5T480-326m127.5-113Q660-492 660-566q0-35-20-68.5T579-700q-32-25-58.5-56T474-824q-93 74-133.5 134.5T300-566q0 74 52.5 127T480-386t127.5-53M160-120l21-57q8-22 27-35.5t42-13.5h460q23 0 42 13.5t27 35.5l21 57z" /></svg>;
export default MaterialStylusBrush;