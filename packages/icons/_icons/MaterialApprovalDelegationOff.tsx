import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApprovalDelegationOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-531 406-695l43-43 121 122 234-233 42 41zM295-200l307 90 188-59-66-66H589q-16 0-31.5-2.5T527-245l-96-29 19-61 94 32q11 4 22.5 6.5T589-294h76l-56-56-230-88h-84zM80-80v-418h298q5 0 10.5 1t10.5 3l106 40 335 334-233 72-312-89v57zm60-60h94v-298h-94zm750 71-42 42L39-836l42-42z" /></svg>;
export default MaterialApprovalDelegationOff;