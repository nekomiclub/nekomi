import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExtensionOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m800-246-60-60v-66l41-19q19-8 30.5-27t11.5-40q0-21.43-11.5-39.72Q800-516 781-525l-41-19v-196H539l-9-51q-5-27-24.67-45.5-19.68-18.5-45.91-18.5Q432-855 412-836.5T387-791l-9 51h-72l-60-60h82q6.63-48.88 43.58-81.94T458.74-915q49.26 0 86.45 33.06Q582.37-848.88 590-800h139q30 0 50.5 20.5T800-729v147q38 18 60.5 49.5T883-458t-22.5 75-60.5 49zm41 213L33-841l43-43L884-76zM740-180l60 60H191q-29 0-50-21t-21-51v-139q52-3 88-39t36-88-36-88.5-87-38.35V-800l60 60v110q55 20 89 66.78t34 105.5q0 59.72-34 107.22T180-287v107zM414-460" /></svg>;
export default MaterialExtensionOff;