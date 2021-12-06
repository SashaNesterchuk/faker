import { getRandomNumber } from './utils'
const VOWELS: Array<string> = ['a', 'e', 'i', 'o', 'u', 'y']
const CONSONANTS: Array<string> = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'x',
  'z',
  'w'
]
export function wordBuilder(capitalize: boolean = false): string {
  const length = getRandomNumber({ min: 3, max: 9 })
  let word: string = ''
  let bo = false
  for (let i = 0; i < length; i++) {
    if (bo) {
      word += VOWELS[getRandomNumber({ max: VOWELS.length - 1 })]
      bo = false
    } else {
      word += CONSONANTS[getRandomNumber({ max: VOWELS.length - 1 })]
      bo = true
    }
  }
  return capitalize ? word.charAt(0).toUpperCase() + word.slice(1) : word
}
interface SymbolInterface {
  symbol: string
  capitalize: boolean
}
const symbols: Array<SymbolInterface> = [
  { symbol: ',', capitalize: false },
  { symbol: '.', capitalize: true },
  { symbol: '?', capitalize: true },
  { symbol: '!', capitalize: true }
]
export type TypeLength = 'words' | 'characters'
export function generateText({
  type = 'words',
  length
}: {
  type?: TypeLength
  length: number
}): string {
  let done: number = 0
  let text: string = ''
  let wordstosymbol = 0
  let capitlizenext = true
  while (done < length) {
    if (wordstosymbol >= 7 && Math.random() >= 0.5) {
      const index = getRandomNumber({ min: 0, max: symbols.length - 1 })
      text += wordBuilder() + symbols[index].symbol + ' '
      wordstosymbol = 0
      capitlizenext = true
    } else {
      text += wordBuilder(capitlizenext) + ' '
      capitlizenext = false
      wordstosymbol++
    }
    if (type === 'words') {
      done++
    } else {
      done = text.length
    }
  }

  if (type === 'characters' && text.length > length) {
    text = text.slice(0, length - 1)
  }

  const index = getRandomNumber({ min: 0, max: symbols.length - 1 })

  return text.trim() + symbols[index].symbol
}
