import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlayDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m635-396-43-43 69-44-329-209v-71l440 280zM793-69 532-330 332-203v-327L70-793l42-42 724 724zM392-312l93-59-93-94zm-60-380" /></svg>;
export default MaterialPlayDisabled;