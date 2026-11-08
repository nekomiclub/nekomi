import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRawOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-360v-240h144q23 0 35.5 12.5T312-552v63q0 20-12 30.5T271-446l37 86h-50l-32-81h-58v81zm226 0 66-240h84l70 240h-54l-18-61h-82l-15 61zm290 0-61-240h49l37 142 34-142h45l37 142 33-142h50l-58 240h-50l-33-131-37 131zM426-469h53l-18-67h-17zm-258-20h96v-63h-96z" /></svg>;
export default MaterialRawOn;