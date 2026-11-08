import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToolsLadderFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M224-120q-14 0-22-11t-4-25l184-663q3-10 10-15.5t17-5.5q14 0 22.5 11t4.5 25l-26 94h266l31-109q3-10 10.5-15.5T735-840q14 0 22 11t4 25L578-141q-2 10-9.5 15.5T551-120q-14 0-22.5-11t-4.5-25l25-94H283l-31 109q-2 10-10 15.5t-18 5.5m131-390h266l39-140H394zm-56 200h267l39-140H338z" /></svg>;
export default MaterialToolsLadderFill;