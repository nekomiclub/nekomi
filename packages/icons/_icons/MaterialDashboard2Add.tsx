import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboard2Add: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160h310v-290H80zm60-410v-170h270v170zm-60 60h390v-290H80zm430 290v-170h310v170zm-60 60h430v-290H450zm-310-60v-170h190v170zm592.5-290Q655-510 600-565.5T545-697q0-78.43 54.99-133.72Q654.98-886 733-886q77 0 132.5 55.28Q921-775.43 921-697q0 76-55.5 131.5t-133 55.5M718-570h33v-110h110v-33H751v-110h-33v110H608v33h110zM330-390" /></svg>;
export default MaterialDashboard2Add;