import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFontDownloadOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-39-39H144q-26.4 0-45.2-18.51Q80-117.01 80-143v-651l-54-54 43-43L876-84zm-692-99h593L141-733zm739-26-59-59v-595H226l-60-60h651q25.99 0 44.49 18.8Q880-842.4 880-816zM628-418 528-518l-47-131h-2l-22 60-43-43 33-88h65zm2 178-51-141 102 102 15 39zm-366 0 126-330 45 45-38 106h144l55 55H376.02L331-240z" /></svg>;
export default MaterialFontDownloadOff;