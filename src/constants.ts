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
    name: 'Julia',
    surname: 'Muñoz',
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
      name: 'Una carta de despedida',
      belongsTo: ['J.']
    },
    {
      type: 'Fotografía',
      name: 'Una foto carnet',
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
      type: 'Grabación',
      name: 'Una canción triste',
      belongsTo: ['J.'],
      audio:'sounds/Sad_Piano.wav'
    },
    
    {
      type: 'Conversación',
      name: 'Lucía y J.',
      belongsTo: ['J.'],
      audio: 'sounds/Acto 2/Lucia - Julio.wav'
    },
    {
      type: 'Conversación',
      name: 'Lucía y Julia',
      belongsTo: ['Lucia'],
      audio: 'sounds/Acto 2/Lucia - Julia.wav'
    },
    {
      type: 'Llamada',
      name: 'Lucía y Pedro',
      belongsTo: ['Lucia'],
      audio: 'sounds/Acto 2/Lucia - Pedro.wav'
    },
    {
      type: 'Fotografía',
      name: 'Recuerdos de la boda',
      belongsTo: ['Lucia'],
    },
    {
      type: 'Grabación',
      name: 'Prácticas de tiro',
      belongsTo: ['Sergi'],
      audio: 'sounds/Acto 2/Sergi.wav'
    },
    {
      type: 'Conversación',
      name: 'Sergi y Lucía',
      belongsTo: ['Sergi'],
      audio: 'sounds/Acto 2/Lucia - Sergi.wav'
    },
    {
      type: 'Postal',
      name: 'Una vista de Nueva York',
      belongsTo: ['Pedro'],
    }
  ],
  //acto 3
  [
    {
      type: 'Conversación',
      name: 'Lucia - J.',
      belongsTo: ['Lucia', 'J.'],
      audio:'sounds/Acto 3/Julio - Lucia.wav'
    },
    {
      type: 'Carta',
      name: 'Una carta para Pedro',
      belongsTo: ['J.']
    },
    {
      type: 'Fotografía',
      name: 'Un día intenso en el trabajo',
      belongsTo: ['Lucia'],
    },
    {
      type: 'Llamada',
      name: 'Lucia - Pedro',
      belongsTo: ['Lucia'],
      audio:'sounds/Acto 3/Lucia - Pedro.wav'
    },
    {
      type: 'Fotografía',
      name: 'Un día en la feria',
      belongsTo: ['Sergi'],
    },
    {
      type: 'Conversación',
      name: 'Sergi - Sargento Gracía',
      belongsTo: ['Sergi'],
      audio:'sounds/Acto 3/Sergi - Sarge.wav'
    },
    {
      type: 'Postal',
      name: 'Una vista de Plaza España',
      belongsTo: ['Pedro'],
    },
    {
      type: 'Grabación',
      name: 'Un mensaje para Carlos',
      belongsTo: ['Pedro'],
      audio:'sounds/Acto 3/Pedro.wav'
    },
    {
      type: 'Carta',
      name: 'Una nota para Juan',
      belongsTo: ['Julia'],
    },
    {
      type: 'Fotografía',
      name: 'Una ascenso',
      belongsTo: ['Ernesto'],
    },
    {
      type: 'Fotografía',
      name: 'Recuerdos del Pueblo',
      belongsTo: ['Ernesto'],
    },
    {
      type: 'Conversación',
      name: 'Sargento Gracía - Fiscal Moreno',
      belongsTo: ['Sargento'],
      audio:'sounds/Acto 3/Sarge - Marta.wav'
    },
    {
      type: 'Fotografía',
      name: 'El Sr. Burbujas',
      belongsTo: ['Marta'],
    },
    {
      type: 'Fotografía',
      name: 'Una página de agenda',
      belongsTo: ['Marta'],
    },
    {
      type: 'Informe',
      name: 'Notas sobre un caso archivado',
      belongsTo: ['Marta'],
    },
    {
      type: 'Fotografía',
      name: 'En su cafetería favorita',
      belongsTo: ['Marta'],
    },
    {
      type: 'Grabación',
      name: 'Una canción triste',
      belongsTo: ['Abril'],
      audio:'sounds/Sad_Piano.wav'
    },
    {
      type: 'Conversación',
      name: 'Abril - Marta',
      belongsTo: ['Abril'],
      audio:'sounds/Acto 3/Marta - Abril.wav'
    },
    {
      type: 'Grabación',
      name: 'EXTRA: Un mensaje para J.',
      belongsTo: ['Abril'],
      audio:'sounds/Acto 3/Abril.wav'
    },
  ],
  //acto 4
  [
    {
      type: 'Fotografía',
      name: 'La graduación',
      belongsTo: ['Abril', 'J.'],
    },
    {
      type: 'Carta',
      name: 'Una carta para Abril',
      belongsTo: ['J.'],
    },
    {
      type: 'Llamada',
      name: 'J. - Pedro',
      belongsTo: ['J.'],
      audio:'sounds/Acto 4/Julio - Pedro.wav'
    },
    {
      type: 'Postal',
      name: 'Una vista de la Sagrada Família',
      belongsTo: ['Lucia'],
      audio:'sounds/Acto 4/Julio - Pedro.wav'
    },
    {
      type: 'Conversación',
      name: 'Lucía - Sergi',
      belongsTo: ['Lucia', 'Sergi'],
      audio:'sounds/Acto 4/Lucia - Sergi.wav'
    },
    {
      type: 'Conversación',
      name: 'Sergi - Marta',
      belongsTo: ['Sergi'],
      audio:'sounds/Acto 4/Sergi - Marta.wav'
    },    
    {
      type: 'Informe',
      name: 'Un informe sobre una persona desaparecida',
      belongsTo: ['Sergi'],
    },   
    {
      type: 'Carta',
      name: 'Una carta para Alex',
      belongsTo: ['Pedro'],
    },
    {
      type: 'Carta',
      name: 'Una carta para Lucía',
      belongsTo: ['Pedro'],
    },
    {
      type: 'Carta',
      name: 'Una carta para Anna María',
      belongsTo: ['Ernesto'],
    },
    {
      type: 'Fotografía',
      name: 'Fotografía Familiar',
      belongsTo: ['Sargento'],
    },
    {
      type: 'Informe',
      name: 'Un informe sobre el caso Milán',
      belongsTo: ['Sargento'],
    },
    {
      type: 'Fotografía',
      name: 'El día del recital',
      belongsTo: ['Marta'],
    },   
    {
      type: 'Informe',
      name: 'Notas sobre Joaquín Cortés',
      belongsTo: ['Marta'],
    },   
    {
      type: 'Conversación',
      name: 'Marta - Marco',
      belongsTo: ['Marta'],
      audio:'sounds/Acto 4/Marta - Marco.wav'
    },
    {
      type: 'Grabación',
      name: 'Una actuación en el club',
      belongsTo: ['Abril'],
      audio:'sounds/Jazzy_Piano.wav'
    }, 
    {
      type: 'Conversación',
      name: 'Abril - Andrea',
      belongsTo: ['Abril'],
      audio:'sounds/Acto 4/Abril - Andrea 1.wav'
    },     
    {
      type: 'Conversación',
      name: 'Daniel - Carlos',
      belongsTo: ['Daniel'],
      audio:'sounds/Acto 4/Carlos - Daniel.wav'
    },          
    {
      type: 'Informe',
      name: 'Notas sobre una entrega',
      belongsTo: ['Marco'],
    },
    {
      type: 'Informe',
      name: 'EXTRA: Notas sobre Carim',
      belongsTo: ['Marco'],
    },      
    {
      type: 'Fotografía',
      name: 'Un cumpleaños de lujo',
      belongsTo: ['Andrea'],
    },   
    {
      type: 'Conversación',
      name: 'Abril - Andrea',
      belongsTo: ['Andrea'],
      audio:'sounds/Acto 4/Abril - Andrea 2.wav'
    },     
    {
      type: 'Conversación',
      name: 'Andrea - Ivette',
      belongsTo: ['Andrea'],
      audio:'sounds/Acto 4/Andrea - Ivette.wav'
    },  
    {
      type: 'Fotografía',
      name: 'Un día más en mi trono',
      belongsTo: ['Ivette'],
    },   
    {
      type: 'Conversación',
      name: 'Ivette - Dr. Alam',
      belongsTo: ['Ivette'],
      audio:'sounds/Acto 4/Ivette - Carim.wav'
    },  
    {
      type: 'Fotografía',
      name: 'Entrenando para llegar a mis límites',
      belongsTo: ['Carim'],
    },   
    {
      type: 'Grabación',
      name: 'Concertando su primera visita',
      belongsTo: ['Carim'],
      audio:'sounds/Acto 4/Carim.wav'
    },  
  ],
   //acto 5
   [
    {
      type: 'Conversación',
      name: 'J. - Lucia',
      belongsTo: ['Lucia', 'J.'],
      audio:'sounds/Acto 5/Julio - Lucia.wav'
    },
    {
      type: 'Conversación',
      name: 'J. - Andrea',
      belongsTo: ['Andrea', 'J.'],
      audio:'sounds/Acto 5/Julio - Andrea.wav'
    },
    {
      type: 'Fotografía',
      name: 'Una reunión inesperada',
      belongsTo: ['Lucia', 'Sergi'],
    },   
    {
      type: 'Conversación',
      name: 'Lucia - Andrea',
      belongsTo: ['Lucia'],
      audio:'sounds/Acto 5/Lucia - Andrea.wav'
    },
    {
      type: 'Informe',
      name: 'Un informe sobre el caso Milán',
      belongsTo: ['Sergi'],
    },
    {
      type: 'Carta',
      name: 'Una carta amenazante',
      belongsTo: ['Sergi'],
    },
    {
      type: 'Carta',
      name: 'Una carta de despedida',
      belongsTo: ['Pedro'],
    },
    {
      type: 'Grabación',
      name: 'Un mensaje para Lucía',
      belongsTo: ['Pedro'],
      audio:'sounds/Acto 5/Pedro.wav'
    },
    {
      type: 'Carta',
      name: 'Una carta para Lucía',
      belongsTo: ['Julia'],
    },
    {
      type: 'Conversación',
      name: 'Ernesto - Sargento García',
      belongsTo: ['Ernesto'],
      audio:'sounds/Acto 5/Ernesto - Sarge.wav'
    },
    {
      type: 'Conversación',
      name: 'Sargento García - Marta',
      belongsTo: ['Sargento','Marta'],
      audio:'sounds/Acto 5/Sarge - Marta.wav'
    },
    {
      type: 'Fotografía',
      name: 'Después de un día de trabajo',
      belongsTo: ['Marta'],
    },
    {
      type: 'Conversación',
      name: 'Marta - Marco',
      belongsTo: ['Marco','Marta'],
      audio:'sounds/Acto 5/Marta - Marco.wav'
    },
    {
      type: 'Conversación',
      name: 'EXTRA: Marta - Ema',
      belongsTo: ['Marta'],
      audio:'sounds/Acto 5/Marta - Ema 1.wav'
    },
    {
      type: 'Grabación',
      name: 'Un mensaje para J.',
      belongsTo: ['Abril'],
      audio:'sounds/Acto 5/Abril.wav'
    },
    {
      type: 'Conversación',
      name: 'Abril - Andrea',
      belongsTo: ['Abril'],
      audio:'sounds/Acto 5/Abril - Andrea.wav'
    },
    {
      type: 'Conversación',
      name: 'Andrea - Ivette',
      belongsTo: ['Andrea'],
      audio:'sounds/Acto 5/Andrea - Ivette.wav'
    },
    {
      type: 'Conversación',
      name: 'Ivette - Carim',
      belongsTo: ['Ivette','Carim'],
      audio:'sounds/Acto 5/Ivette - Carim.wav'
    },
    {
      type: 'Conversación',
      name: 'Ivette - Ema',
      belongsTo: ['Ivette'],
      audio:'sounds/Acto 5/Ivette - Ema.wav'
    },
    {
      type: 'Conversación',
      name: 'Julio - Carim',
      belongsTo: ['Carim'],
      audio:'sounds/Acto 5/Julio - Carim.wav'
    },
    {
      type: 'Grabación',
      name: 'TODO: Una grabación en el quirófano',
      belongsTo: ['Ema'],
      audio:'sounds/Acto 5/todo.wav'
    },
    {
      type: 'Conversación',
      name: 'Marta - Ema',
      belongsTo: ['Ema'],
      audio:'sounds/Acto 5/Marta - Ema 2.wav'
    },
    {
      type: 'Informe',
      name: 'Un informe de autopsia falso',
      belongsTo: ['Ema'],
    },
  ],
]

export const extraHints: Hint[] = [
  {
    type: 'Informe',
    name: 'Un informe medico',
    belongsTo: []
  }, 
  {
    type: 'Grabación',
    name: 'Una conversacion en un hotel',
    belongsTo: [],
    audio:'sounds/Lucia - Sergi - Pedro.wav'
  }, 
  {
    type: 'Fotografía',
    name: 'Un fragmento de un periódico',
    belongsTo: []
  },
  {
    type: 'Informe',
    name: 'Notas sobre una detención',
    belongsTo: []
  },
  {
    type: 'Informe',
    name: 'Un informe sobre Julio Cortes',
    belongsTo: []
  },
  {
    type: 'Informe',
    name: 'El motivo del disparo',
    belongsTo: []
  },
  {
    type: 'Carta',
    name: 'El regalo de despedida',
    belongsTo: []
  },
]
