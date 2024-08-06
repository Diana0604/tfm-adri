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

type HintType = 'Carta' | 'Foto' | 'Grabacion'

type Hint = {
  type: HintType
}