import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRollerSkatingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-330v-590h320v125H376q-6 0-10.5 4.5T361-780t4.5 10.5T376-765h104v27q0 5.75.5 11.5T482-715H376q-6 0-10.5 4.5T361-700t4.5 10.5T376-685h116q13 25 35.12 41.8Q549.25-626.4 576-618l115 32q49 14 79 54.05 30 40.06 30 90.95v111zM112-72.12q-32-32.12-32-78T112.12-228t78-32T268-227.88t32 78T267.88-72t-78 32T112-72.12M769.88-40Q724-40 692-72.12t-32-78T692.12-228t78-32T848-227.88t32 78T847.88-72t-78 32m-290 0Q434-40 402-72.12t-32-78T402.12-228t78-32T558-227.88t32 78T557.88-72t-78 32" /></svg>;
export default MaterialRollerSkatingFill;