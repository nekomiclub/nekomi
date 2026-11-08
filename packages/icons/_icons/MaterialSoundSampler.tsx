import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundSampler: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M166-234q-41-51-63.5-113.5T80-480q0-158 105.5-271T444-878v60q-128 14-216 109.5T140-480q0 57 18.5 109t50.5 95zM480-80q-73 0-138-24.5T224-173l42-43q45 36 99 56t115 20 115.5-20.5T695-217l42 43q-52 44-117.5 69T480-80m315-154-43-42q32-43 50-95t18-109q0-132-87-228T517-818v-60q154 14 258.5 127T880-480q0 70-22.5 132.5T795-234m-408-85v-342l268 171z" /></svg>;
export default MaterialSoundSampler;