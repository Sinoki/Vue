import { reactive, readonly } from 'vue';

// ------------------Interfaces--------------------------------//
interface Card {
    id: number;
    name: string;
    price: number;
    attack: number;
    defence: number;
}

interface State {
    list: Card[];
    busy: boolean;
}

// ------------------------------------------------------------//

// ------------------State------------------------------------//
const state: State = reactive({
  list: [],
  busy: false,
});
// -----------------------------------------------------------//

// --------------------Mutations---------------------------//
const mutations = {
  setBusy(newValue: boolean) {
    state.busy = newValue;
  },
  processCard(card:any) {
    // Verificar se existe, buscando o index
    const idx = state.list.findIndex((x) => x.id === card.id);

    // Criar um objeto novo
    const newCard: Card = {
      id: card.id,
      name: card.name,
      price: card.price,
      attack: card.attack,
      defence: card.defence,
    };

    // Se existir -> edita;
    // se não... -> adiciona;

    if (idx === -1) {
      state.list.push(newCard);
    } else {
      state.list[idx] = newCard;
    }
  },
};
// -------------------------------------------------------//

// ------------------- Actions ------------------------------//
const actions = {
  loadCards() {
    mutations.setBusy(true);

    const mockData = [
      {
        id: 1,
        name: 'Pikachu',
        price: 10,
        attack: 5,
        defence: 10,
        url: '',
      },
      {
        id: 2,
        name: 'Bulbasaur',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 3,
        name: 'Charmander',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 4,
        name: 'Squirtle',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 5,
        name: 'Meowth',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 6,
        name: 'Butterfree',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 7,
        name: 'Eevee',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 8,
        name: 'Arbok',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 9,
        name: 'Mewtwo',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 10,
        name: 'Magikarp',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 11,
        name: 'Psyduck',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 12,
        name: 'Onix',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 13,
        name: 'Pidgey',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 14,
        name: 'Primeape',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 15,
        name: 'Snorlax',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 16,
        name: 'Scyther',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 17,
        name: 'Rattata',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 18,
        name: 'Sandshrew',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 19,
        name: 'Muk',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 20,
        name: 'Jigglypuff',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 21,
        name: 'Zubat',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 22,
        name: 'Kadabra',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 23,
        name: 'Venonat',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 24,
        name: 'Rapidash',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 25,
        name: 'Hitmonlee',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 26,
        name: 'Golem',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 27,
        name: 'Koffing',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 28,
        name: 'Dodrio',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 29,
        name: 'Tangela',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 30,
        name: 'Dragonite',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 31,
        name: 'Bellsprout',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 32,
        name: 'Haunter',
        price: 10,
        attack: 5,
        defence: 10,
      },
      {
        id: 33,
        name: 'Lapras',
        price: 10,
        attack: 5,
        defence: 10,
      },
    ];

    console.log('Vamos carregar os cards');

    setTimeout(() => {
      console.log('depois de 10s');
      mockData.forEach((card) => {
        console.log(card);
        mutations.processCard(card);
      });

      mutations.setBusy(false);
    }, 5000);
  },
};
// ---------------------------------------------------------//

export default function useCards() {
  return readonly({
    state,
    actions,
    mutations,
  });
}
