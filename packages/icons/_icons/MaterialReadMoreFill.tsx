import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReadMoreFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m288-276-42-42 131-132H80v-60h297L246-642l42-42 204 204zm252-34v-60h340v60zm0-280v-60h340v60zm120 140v-60h220v60z" /></svg>;
export default MaterialReadMoreFill;