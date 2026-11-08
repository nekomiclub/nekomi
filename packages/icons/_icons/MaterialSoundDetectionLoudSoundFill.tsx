import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundDetectionLoudSoundFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M708-256H483L355-128q-17 17-42.5 17T270-128L129-270q-17-17-17-42t17-42l127-128v-225zM289-785q107-68 231.5-54.5T735-736t103.5 214.5T784-290l-44-44q49-89 36.5-188T692-693t-171.5-85T333-741zm135 135q48-17 98-5.5t86 47.5 47 86-6 98l-50-51q2-25-6.5-48.5T566-565t-41.5-27-49.5-7z" /></svg>;
export default MaterialSoundDetectionLoudSoundFill;