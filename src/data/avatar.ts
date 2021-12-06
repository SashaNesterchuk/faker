export interface AvatarParams {
  size?: 100 | 200 | 300
  colorBackground?: string
  colorText?: string
}
interface Props extends AvatarParams {
  name: string
}
export function generateAvatar({
  size = 100,
  colorBackground = '#C7DAFC',
  colorText = '#5D98F6',
  name
}: Props): string {
  return `<svg version="1.1" baseProfile="full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="${size}px">
    <circle cx="50" cy="50" r="50" fill="${colorBackground}" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="40" fill="${colorText}">${name}</text>
  </svg>`
}
