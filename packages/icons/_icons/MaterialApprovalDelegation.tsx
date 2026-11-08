import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApprovalDelegation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-531 406-695l43-43 121 122 234-233 42 41zM295-200l307 90 248-78q0-20-15.5-33.5T798-235H589q-16 0-31.5-2.5T527-245l-96-29 19-61 94 32q11 4 22.5 6t22.5 2h56q0-21-14-36.5T597-355l-218-83h-84zM80-80v-418h298q5 0 10.5 1t10.5 3l218 82q38 14 64.5 45t26.5 72h90q51 0 86.5 37t35.5 88v26L607-48l-312-89v57zm60-60h94v-298h-94z" /></svg>;
export default MaterialApprovalDelegation;