import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M702-494 575-622l42-42 85 85 170-170 42 43zm-450-29q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.5-46.5T360-420t118 13.5T611-360q33 15 51 43t18 63v94zm60-60h520v-34q0-16-9-30.5T587-306q-71-33-120-43.5T360-360t-107.5 10.5T132-306q-15 7-23.5 21.5T100-254zm324.5-346.5Q450-592 450-631t-25.5-64.5T360-721t-64.5 25.5T270-631t25.5 64.5T360-541t64.5-25.5M360-631" /></svg>;
export default MaterialPersonCheck;