import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoomService: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-200v-60h800v60zm30-120v-17q0-155 88.5-250T420-710v-30q0-26 17-43t43-17 43 17 17 43v30q133 28 221.5 123T850-337v17zm63-60h614q-14-128-102.5-200.5T479-653t-204.5 72.5T173-380m307 0" /></svg>;
export default MaterialRoomService;