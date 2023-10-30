/**
  Helper function to pair key and value together

  Note: PostCSS Converts all `px` values to `rem`
*/
export function pxPair(value: number) {
  return { [value]: `${value}px` }
}

/**
  Given a minimum size, maximum size, and a query range,
  returns a CSS function to fluidly transition between
  minimum and maximum
 */
export function pxBoundsToFluidRem(
  minSize: number,
  maxSize: number,
  minBound: number = 550,
  maxBound: number = 1360,
  boundUnit: string = 'vw',
): string {
  const clamp = (min: string, val: string, max: string) =>
    `clamp(${[min, val, max].join(', ')})`

  /**
    Adapted from https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
  */
  const slope = (maxSize - minSize) / (maxBound - minBound)
  const slopeToUnit = (slope * 100).toFixed(2)
  const interceptRem = Number((minSize - slope * minBound).toFixed(2))
  const val = `${slopeToUnit}${boundUnit} + ${interceptRem}px`
  const size = clamp(
    `${Math.min(minSize, maxSize)}px`,
    val,
    `${Math.max(minSize, maxSize)}px`,
  )

  return size
}
