type Character = {
  name: CharacterName,
  surname: string,
  title?: string,
}

type HintType = 'Carta' | 'Postal' | 'Fotografía' | 'Grabación' | 'Poema' | 'Informe' | 'Conversación' | 'Llamada' | 'Misc' | 'Pista Disponible'

type CharacterName = 'J.' | 'Lucia' | 'Sergi' | 'Pedro' | 'Julia' | 'Ernesto' | 'Sargento' | 'Marta' | 'Abril' | 'Daniel' | 'Marco' | 'Andrea' | 'Ivette' | 'Carim' | 'Ema' | ''

type Hint = {
  type: HintType,
  name: string,
  hintDependency?: string,
  belongsTo: CharacterName[],
  audio?: string
}