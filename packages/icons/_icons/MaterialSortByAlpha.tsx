import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSortByAlpha: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-280 162-400h63l161 400h-63l-38-99H181l-38 99zm121-151h144l-70-185h-4zm347 151v-62l233-286H566v-52h272v63L607-332h233v52zM384-784l96-96 96 96zm96 704-96-96h192z" /></svg>;
export default MaterialSortByAlpha;