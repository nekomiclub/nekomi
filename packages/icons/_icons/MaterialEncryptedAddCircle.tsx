import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEncryptedAddCircle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-522v-239l320-120 320 120v245h-60v-203l-260-96-260 96v197q0 69 20 127.5t52.5 105 73 80 80.5 52.45V-90q-125-43-205.5-162T160-522m518 362h33v-90h90v-33h-90v-90h-33v90h-90v33h90zm14.5 80Q615-80 560-135.5T505-267q0-78.43 54.99-133.72Q614.98-456 693-456q77 0 132.5 55.28Q881-345.43 881-267q0 76-55.5 131.5T692.5-80m-163-439.8q20.5-20.79 20.5-50 0-29.2-20.59-49.7t-49.5-20.5T430-619.41t-21 49.5T429.8-520q20.79 21 50 21 29.2 0 49.7-20.8" /></svg>;
export default MaterialEncryptedAddCircle;