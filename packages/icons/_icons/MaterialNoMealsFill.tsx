import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoMealsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-73-73v34h-60v-94L26-848l43-43L876-84zm-73-245-60-60v-54h-54l-61-61v-244q0-79 48-127t127-48zM470-578l-60-58v-244h60zM345-701l-60-60v-119h60zM220-826l-54-54h54zm65 746v-368q-52-11-88.5-52.5T160-600v-200l60 60v140h65v-75l60 60v15h15l85 85q-17 26-43 43.5T345-448v368z" /></svg>;
export default MaterialNoMealsFill;