import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeveloperBoardOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M806-270 680-397v-149H531l-31-30h180v-144H483v127l-30-31v-96h-96L236-840h504q23 0 41.5 18.5T800-780v60h60v60h-60v135h60v60h-60v135h60v60zm-606 30h253v-200H200zm-48-600 648 648q-2 28-18 50t-42 22H150q-24 0-42-18t-18-42v-600q0-24 18-40.5t44-19.5m331 331v269h197v-72zM272-720h-72v250h253v-69zM849-57 42-864l43-43 807 807z" /></svg>;
export default MaterialDeveloperBoardOffFill;