import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCallEnd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m136-306-94-94q-9-9-8.5-21t8.5-22q82-96 197-146.5T480-640t241 50.5T918-443q8 10 8.5 22t-8.5 21l-94 94q-8 8-23 9t-24-6l-114-85q-6-4.5-9-10.5t-3-13.5v-139q-42-16-85.5-22.5T480-580t-85.5 6.5T309-551v139q0 7.5-3 13.5t-9 10.5l-114.19 85.28q-11.81 8.72-24.5 7.8-12.68-.93-22.31-11.08m108-220q-38 19-73 45.5T104-424l57 59 83-61zm467-4v98l87 66 58-58q-32-33-68.5-58.5T711-530m0 0" /></svg>;
export default MaterialCallEnd;