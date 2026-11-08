import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCakeAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-645v-90h-90v-60h90v-90h60v90h90v60h-90v90zM120-80q-17 0-28.5-11.5T80-120v-219q0-24.75 17.63-42.38Q115.25-399 140-399h27v-182q0-24.75 17.63-42.38Q202.25-641 227-641h183v-64q-20-14-30.5-30.53-10.5-16.54-10.5-39.88 0-14.59 5.5-28.09T390-827l50-53 50 53q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q490-719 470-705v64h183q24.75 0 42.38 17.62Q713-605.75 713-581v182h27q24.75 0 42.38 17.62Q800-363.75 800-339v219q0 17-11.5 28.5T760-80zm107-319h426v-182H227zm-87 259h600v-199H140zm87-259h426zm-87 259h600zm600-259H140z" /></svg>;
export default MaterialCakeAdd;