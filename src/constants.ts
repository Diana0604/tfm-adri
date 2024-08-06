export const characters: Character[] = [
  {
    name: 'J.',
    surname: 'Cortes',
    hintsA1: [
      {
        type: 'Carta',
        name: 'carta de despedida'
      },
      {
        type: 'Fotografia',
        name: 'Foto carnet'
      }
    ],
    hintsA2: [
      {
        type: 'Poema',
        name: 'Un poema sobre la infancia'
      },
      {
        type: 'Grabacion',
        name: 'Una grabacion al piano'
      },
      {
        type: 'Grabacion',
        name: 'Una conversacion con Lucia',
        hintDependency: 'fotografia de boda - Lucia'
      }
    ],
    hintsA3: [
      {
        type: 'Grabacion',
        name: 'Una conversacion con Lucia',
        duplicated: true
      },
      {
        type: 'Carta',
        name: 'Una carta para Pedro'
      }],
    hintsA4: [
      {
        type: 'Fotografia',
        name: 'Una fotografía de graduación',
        duplicated: true
      },
      {
        type: 'Grabacion',
        name: 'Una carta para Abril',
      },
      {
        type: 'Grabacion',
        name: 'Una conversacion con Pedro'
      }
    ],
    hintsA5: [
      {
        type: 'Grabacion',
        name: 'Una conversacion con Lucia'
      },
      {
        type: 'Grabacion',
        name: 'Una conversacion con Andrea',
        duplicated: true
      }
    ],
  },
  {
    name: 'Lucia',
    surname: 'Cortes',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Sergi',
    surname: 'Roca',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Pedro',
    surname: 'Ferrer',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Ernesto',
    surname: 'Larrea',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    surname: 'Garcia',
    title: 'Sargento',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Marta',
    surname: 'Moreno',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Abril',
    surname: 'Curto',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Daniel',
    surname: 'Gutierrez',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Andrea',
    surname: 'Marino',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Ivette',
    surname: 'Ferrer',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Carim',
    surname: 'Alam',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  },
  {
    name: 'Ema',
    surname: 'Dupont',
    hintsA1: [],
    hintsA2: [],
    hintsA3: [],
    hintsA4: [],
    hintsA5: [],
  }
]