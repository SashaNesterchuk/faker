export function getRandomNumber({
  min = 0,
  max
}: {
  min?: number
  max: number
}): number {
  return Math.round(Math.random() * (max - min) + min)
}
