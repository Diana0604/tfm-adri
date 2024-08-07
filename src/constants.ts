export const characters: Character[] = [
  {
    name: 'J.',
    surname: 'Cortes',
    hints: [
      //act 1
      [
        {
          type: 'Carta',
          name: 'carta de despedida',
        },
        {
          type: 'Fotografia',
          name: 'Foto carnet',
        }
      ],
      //act 2
      [
        {
          type: 'Poema',
          name: 'Un poema sobre la infancia',
        },
        {
          type: 'Grabacion',
          name: 'Una grabacion al piano',
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con Lucia',
          hintDependency: 'fotografia de boda - Lucia',
        }
      ],
      //act 3
      [
        {
          type: 'Grabacion',
          name: 'Una conversacion con Lucia',
          duplicated: 'Lucia',
        },
        {
          type: 'Carta',
          name: 'Una carta para Pedro',
        }
      ],
      //act 4
      [
        {
          type: 'Fotografia',
          name: 'Una fotografía de graduación',
        },
        {
          type: 'Grabacion',
          name: 'Una carta para Abril',
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con Pedro',
        }
      ],
      //act 5
      [
        {
          type: 'Grabacion',
          name: 'Una conversacion con Lucia',
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con Andrea',
        }
      ]]
  },
  {
    name: 'Lucia',
    surname: 'Cortes',
    hints: [
      //acto 1
      [],
      //acto 2
      [
        {
          type: 'Grabacion',
          name: 'Un conversación con Julia'
        },
        {
          type: 'Fotografia',
          name: 'Una foto de un grafiti'
        },
        {
          type: 'Grabacion',
          name: 'Una llamada telefonica con Pedro'
        },
        {
          type: 'Misc',
          name: 'Una invitacion de boda + una foto de recien casados'
        }
      ],
      //acto 3
      [
        {
          type: 'Fotografia',
          name: 'Una fotografia con Julia',
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con J.',
          duplicated: 'J.',
        },
        {
          type: 'Grabacion',
          name: 'Una llamada con Sergio'
        }
      ],
      //acto 4
      [
        {
          type: 'Postal',
          name: 'Una postal para Pedro'
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con Sergi'
        }
      ],
      //acto 5
      [
        {
          type: 'Fotografia',
          name: 'Una fotografia en un picnic'
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con J.'
        },
        {
          type: 'Grabacion',
          name: 'Una conversacion con Andrea'
        }
      ]
    ]
  },
  {
    name: 'Sergi',
    surname: 'Roca',
    hints: [[]]
  },
  {
    name: 'Pedro',
    surname: 'Ferrer',
    hints: [[]]
  },
  {
    name: 'Ernesto',
    surname: 'Larrea',
    hints: [[]]
  },
  {
    surname: 'Garcia',
    name: 'Sargento',
    hints: [[]]
  },
  {
    name: 'Marta',
    surname: 'Moreno',
    hints: [[]]
  },
  {
    name: 'Abril',
    surname: 'Curto',
    hints: [[]]
  },
  {
    name: 'Daniel',
    surname: 'Gutierrez',
    hints: [[]]
  },
  {
    name: 'Andrea',
    surname: 'Marino',
    hints: [[]]
  },
  {
    name: 'Ivette',
    surname: 'Ferrer',
    hints: [[]]
  },
  {
    name: 'Carim',
    surname: 'Alam',
    hints: [[]]
  },
  {
    name: 'Ema',
    surname: 'Dupont',
    hints: [[]]
  }
]