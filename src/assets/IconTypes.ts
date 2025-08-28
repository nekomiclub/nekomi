export interface IconProps {
  width: number
  height: number

  className?: string
  /** You can also pass css variable (--color-id23), var() will be added */
  fill?: string
  /** 0 - 1 */
  fillOpacity?: number

  /** You can also pass css variable (--color-id23), var() will be added */
  strokeColor?: string
  strokeWidth?: number
}



export default function IconDTO({ height, width, className, fill, strokeColor, strokeWidth, fillOpacity }: IconProps): IconProps {
  return {
    // Check if value is css variable
    fill: fill?.includes('--') ? `var(${fill})` : fill ?? undefined,
    // Check if value is css variable
    strokeColor: strokeColor?.includes('--') ? `var(${strokeColor})` : strokeColor ?? undefined,

    strokeWidth,
    width,
    height,
    className,
    fillOpacity,
  };
}