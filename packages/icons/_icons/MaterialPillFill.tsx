import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPillFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m661-342 113-114q32-32 49-73t17-86q0-94-65.5-159.5T615-840q-45 0-86 17t-73 49L342-661zM345-120q45 0 86-17t73-49l114-113-319-319-113 114q-32 32-49 73t-17 86q0 94 65.5 159.5T345-120" /></svg>;
export default MaterialPillFill;