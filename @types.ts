type Character = {
  name: CharacterName,
  surname: string,
  title?: string,
}

type HintType = 'Carta' | 'Postal' | 'Fotografia' | 'Grabacion' | 'Poema' | 'Informe' | 'Conversación' | 'Pista Disponible' | 'Misc'

type CharacterName = 'J.' | 'Lucia' | 'Sergi' | 'Pedro' | 'Ernesto' | 'Sargento' | 'Marta' | 'Abril' | 'Daniel' | 'Andrea' | 'Ivette' | 'Carim' | 'Ema' | ''

type Hint = {
  type: HintType,
  name: string,
  hintDependency?: string,
  belongsTo: CharacterName[]
}