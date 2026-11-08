import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApprovalDelegationOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-531 406-695l43-43 121 122 234-233 42 41zM890-69l-42 42L39-836l42-42zm-595-68v-337h83q5 0 10.5 1t10.5 3l145 55 134 134h-63q-23 0-45.5-3.5T525-295l-73-24-10 28 75 26q26 9 54 11.5t56 2.5h81l131 131-232 72zM80-80v-394h154v394z" /></svg>;
export default MaterialApprovalDelegationOffFill;