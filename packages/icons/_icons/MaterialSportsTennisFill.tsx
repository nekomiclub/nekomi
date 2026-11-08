import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsTennisFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m123-159-43-43 174-174q33-33 47-82.5T315-597q0-57 25-112t76-106q88-88 193-100t173 56 56 174-100 194q-51 51-106 75t-112 24q-89 0-139.5 13T297-333zm290-332q49 49 133 36.5T697-534t80-149.5T741-815t-132.5-36.5T458-772t-80.5 149.5T413-491M634-82q-42-42-42-102t42-102 102-42 102 42 42 102-42 102-102 42-102-42" /></svg>;
export default MaterialSportsTennisFill;