import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSheetsColumnSwapFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-615v-225h287v225zm60-60h167v-105H220zm292 555v-390h288v390zm60-60h168v-106H572zm0-166h168v-104H572zm23-269v-60h102L579-794l42-42 119 118v-102h60v205zM338-229 220-348v103h-60v-205h205v60H262l119 118z" /></svg>;
export default MaterialSheetsColumnSwapFill;