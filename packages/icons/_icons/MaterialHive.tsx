import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHive: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m394-80-70-123H189l-87-154 69-123-69-123 87-154h135l70-123h172l70 123h135l87 154-69 123 69 123-87 154H636L566-80zm243-429h100l54-94-54-94H637l-54 94zM430-388h100l54-92-54-92H430l-54 92zm0-244h100l54-94-54-94H430l-54 94zM224-509h100l54-94-54-94H224l-54 94zm0 246h100l54-94-55-94H223l-54 94zm206 123h100l54-94-54-94H430l-54 94zm207-123h100l54-94-54-94H637l-51 94z" /></svg>;
export default MaterialHive;