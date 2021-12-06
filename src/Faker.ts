import { names } from './data/names'
import { lastNames } from './data/lastNames'
import { generateAvatar, AvatarParams } from './data/avatar'
import { getRandomNumber } from './utils/utils'
import { TypeLength, generateText } from './utils/word'
import countries from './utils/countries'

interface TextProps {
  type?: TypeLength
  length: number
}
export default class Faker {
  static randomNumber({ min = 0, max }: { min?: number; max: number }): number {
    return getRandomNumber({ min, max })
  }

  private lastGetName: string

  public text({ type, length }: TextProps): string {
    return generateText({ type, length })
  }

  public email(): string {
    if (!this.lastGetName) {
      this.nameFull()
    }
    return `${this.lastGetName.replace(' ', '_').toLowerCase()}@test.com`
  }

  public nameFull(): string {
    const indexName = Faker.randomNumber({ max: names.length - 1 })
    const indexLastName = Faker.randomNumber({ max: lastNames.length - 1 })
    this.lastGetName = `${names[indexName]} ${lastNames[indexLastName]}`
    return this.lastGetName
  }

  public avatar(params?: AvatarParams): string {
    if (!this.lastGetName) {
      this.nameFull()
    }
    const splitedName = this.lastGetName.split(' ')
    const name = splitedName[0].charAt(0) + splitedName[1].charAt(0)
    return generateAvatar({ ...params, name })
  }

  public country(): string {
    const index = getRandomNumber({ max: countries.length - 1 })
    return countries[index].name
  }
}
