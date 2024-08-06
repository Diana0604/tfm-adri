type Character = {
  name?: string,
  surname: string,
  title?: string,
  hintsA1: Hint[],
  hintsA2: Hint[],
  hintsA3: Hint[],
  hintsA4: Hint[],
  hintsA5: Hint[],
}

type HintType = 'Carta' | 'Postal' | 'Fotografia' | 'Grabacion' | 'Poema'

type Hint = {
  type: HintType,
  name: string,
  hintDependency?: string,
  duplicated?: boolean
}