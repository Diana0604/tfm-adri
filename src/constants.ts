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
          duplicated: true,
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
          duplicated: true,
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
          duplicated: true,
        }
      ]]
  },
  {
    name: 'Lucia',
    surname: 'Cortes',
    hints: [[]]
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
    title: 'Sargento',
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