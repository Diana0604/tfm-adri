type Character = {
  name?: string,
  surname: string,
  title?: string,
  hints: Hint[][]
}

type HintType = 'Carta' | 'Postal' | 'Fotografia' | 'Grabacion' | 'Poema'

type Hint = {
  type: HintType,
  name: string,
  hintDependency?: string,
  duplicated?: boolean
}