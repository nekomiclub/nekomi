import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsSeatingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M313-80q-12 0-21-8.68-9-8.67-9-21.5 0-12.82 9-21.32t21.5-8.5 21 8.68q8.5 8.67 8.5 21.5 0 12.82-8.62 21.32Q325.75-80 313-80m167 0q-12 0-21-8.68-9-8.67-9-21.5 0-12.82 9-21.32t21.5-8.5 21 8.68q8.5 8.67 8.5 21.5 0 12.82-8.62 21.32Q492.75-80 480-80m166.82 0Q634-80 625.5-88.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5M325-245v-123h-29q-23 0-40.5-16T236-423l-35-417h90.46q41.54 0 73.04 26.5T403-746l25.39 153H605q65 0 110 45.24T760-439v71h-83v123h-60v-123H385v123z" /></svg>;
export default MaterialSettingsSeatingFill;