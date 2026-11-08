import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMealLunch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M228-140h177q17.89 0 31.94-11Q451-162 455-179l16-65H161l16 64q5 17 19.06 28.5Q210.11-140 228-140m-87-310H81v-101h60zm231-96-71-71 42-43 72 72zM111-655H81v-60h30q55.83 0 94.92-39.38Q245-793.75 245-850v-30h60v30q0 80.92-56.74 137.96Q191.51-655 111-655m399-165H409v-60h101zM40-80v-60h89q-3-6-5.5-12t-4.5-13L84-304h464l-34 139q-2 7-4.5 13t-5.5 12h279l30-351H557l11 127h-60l-16-187h386l-34 411h76v60zm276-60" /></svg>;
export default MaterialMealLunch;