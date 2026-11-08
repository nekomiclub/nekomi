import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditorChoice: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-40v-343L122-590l179-290h358l179 290-128 207v343l-230-77zm60-84 170-55 170 55v-176H310zm24-696L192-590l142 230h292l142-230-142-230zm104 379L310-568l43-43 85 85 169-170 43 42zM310-300h340z" /></svg>;
export default MaterialEditorChoice;