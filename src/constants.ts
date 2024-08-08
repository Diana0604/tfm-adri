export const characters: Character[] = [
  {
    name: 'J.',
    surname: 'Cortes'
  },
  {
    name: 'Lucia',
    surname: 'Cortes',
  },
  {
    name: 'Sergi',
    surname: 'Roca',
  },
  {
    name: 'Pedro',
    surname: 'Ferrer',
  },
  {
    name: 'Ernesto',
    surname: 'Larrea',
  },
  {
    surname: 'Garcia',
    name: 'Sargento',
  },
  {
    name: 'Marta',
    surname: 'Moreno',
  },
  {
    name: 'Abril',
    surname: 'Curto',
  },
  {
    name: 'Daniel',
    surname: 'Gutierrez',
  },
  {
    name: 'Andrea',
    surname: 'Marino',
  },
  {
    name: 'Ivette',
    surname: 'Ferrer',
  },
  {
    name: 'Carim',
    surname: 'Alam',
  },
  {
    name: 'Ema',
    surname: 'Dupont',
  }
]

export const hints: Hint[][] = [
  //acto 1
  [
    {
      type: 'Carta',
      name: 'carta de despedida',
      belongsTo: ['J.']
    },
    {
      type: 'Fotografia',
      name: 'Foto carnet',
      belongsTo: ['J.']
    }
  ],
  //acto 2
  [
    {
      type: 'Pista Disponible',
      name: '-',
      belongsTo: ['J.']
    },
    {
      type: 'Poema',
      name: 'Un poema sobre la infancia',
      belongsTo: ['J.']
    },
    {
      type: 'Grabacion',
      name: 'Una canción triste',
      belongsTo: ['J.']
    },
    {
      type: 'Conversación',
      name: 'Lucía y J.',
      hintDependency: 'fotografia de boda - Lucia',
      belongsTo: ['J.'],
      audio: 'sounds/Acto 2/Lucia - Julio.wav'
    },
    {
      type: 'Grabacion',
      name: 'Prácticas de tiro',
      belongsTo: ['Sergi']
    }
  ],
  //acto 3
  [
    {
      type: 'Grabacion',
      name: 'Conversacion Lucia - J.',
      belongsTo: ['Lucia', 'J.'],
    },
    {
      type: 'Carta',
      name: 'Una carta para Pedro',
      belongsTo: ['J.']
    }
  ],
]

export const extraHints: Hint[] = [
  {
    type: 'Informe',
    name: 'Un informe medico',
    belongsTo: []
  }, {
    type: 'Grabacion',
    name: 'Una conversacion en un hotel',
    belongsTo: []
  }, {
    type: 'Informe',
    name: 'Un informe sobre Julio Cortes',
    belongsTo: []
  }
]
