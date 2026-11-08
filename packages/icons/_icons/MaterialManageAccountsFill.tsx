import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialManageAccountsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m667-120-10-66q-17-5-34.5-14.5T593-222l-55 12-25-42 47-44q-2-9-2-25t2-25l-47-44 25-42 55 12q12-12 29.5-21.5T657-456l10-66h54l10 66q17 5 34.5 14.5T795-420l55-12 25 42-47 44q2 9 2 25t-2 25l47 44-25 42-55-12q-12 12-29.5 21.5T731-186l-10 66zM80-164v-94q0-35 17.5-63t50.5-43q72-32 133.5-46T400-424h23q-21 51-19 134.5T438-164zm672-99q22-22 22-58t-22-58-58-22-58 22-22 58 22 58 58 22 58-22M292-527q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42" /></svg>;
export default MaterialManageAccountsFill;