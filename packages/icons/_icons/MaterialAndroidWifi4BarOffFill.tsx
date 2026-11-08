import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidWifi4BarOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M57-554 0-611q20-18 40-34.5T82-677l-50-35 46-65 790 552-45 65-327-228h-16q-52 0-100.5 17.5T292-319l-57-57q35-31 74.5-51.5T394-459l-87-61q-36 15-69.5 36T175-436l-57-57q26-24 54-44t59-36l-78-54q-26 16-49.5 34T57-554m372 373q-21-21-21-51 0-29 21.5-50t50.5-21q30 0 51 20.5t21 50.5-21 51-51 21-51-21m-69-527-89-60q51-16 103-24t106-8q134 0 258 48.5T960-611l-57 57q-87-81-196-123.5T480-720q-31 0-61 3t-59 9m411 288L462-635h19q101 0 194 36t168 105z" /></svg>;
export default MaterialAndroidWifi4BarOffFill;