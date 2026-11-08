import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17m273-265 114-113q23-23 35.5-53.5T780-615q0-69-48-117t-117-48q-33 0-63.5 12.5T498-732L385-618zM345-180q32 0 63-12.5t54-35.5l113-114-233-233-114 113q-23 23-35.5 53.5T180-345q0 69 48 117t117 48" /></svg>;
export default MaterialPill;