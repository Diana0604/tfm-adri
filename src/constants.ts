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
      type: 'Poema',
      name: 'Un poema sobre la infancia',
      belongsTo: ['J.']
    },
    {
      type: 'Grabacion',
      name: 'Una grabacion al piano',
      belongsTo: ['J.']
    },
    {
      type: 'Grabacion',
      name: 'Una conversacion con Lucia',
      hintDependency: 'fotografia de boda - Lucia',
      belongsTo: ['J.']
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
