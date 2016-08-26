export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];

        let averageJoes = [
            {id: 1, name: 'John Smith', job: 'Construction Worker'},
            {id: 2, name: 'Sally Parker', job: 'Realtor'},
            {id: 3, name: 'Jim Cricket', job: 'Conscience'},
            {id: 4, name: 'Bob Salazar', job: 'Restaurant Owner'},
            {id: 5, name: 'Top Ramen'},
            {id: 6, name: 'Chef Boyardee'},
            {id: 7, name: 'Chief Wigguns'},
            {id: 8, name: 'Dr Sulu'},
            {id: 9, name: 'Aquaman'},
            {id: 10, name: 'Gza'}
        ];

        let superHeroes = [
            {id: 1, name: 'Spider-man', powers: ['spins webs', 'climb walls']},
            {id: 2, name: 'Batman', powers: ['smart', 'rich', 'martial arts']},
            {id: 3, name: 'Superman', powers: ['super strength', 'super speed', 'flight', 'heat vision']},
            {id: 4, name: 'Wonder Woman', powers: []},
            {id: 5, name: 'Dr. Strange',powers: []},
            {id: 6, name: 'Silver Surfer',powers: []},
            {id: 7, name: 'Spawn', powers: []},
            {id: 8, name: 'The Punisher',powers: []},
            {id: 9, name: 'Daredevil',powers: []},
            {id: 10, name: 'Wolverine',powers: []}
        ];

        let superVillians = [
            {id: 1, name: 'Joker', henchmen: [{id:1, name: 'Harley Quinn'}]},
            {id: 2, name: 'Dr. Octopus', henchmen: []},
            {id: 3, name: 'Carnage', henchmen: []},
            {id: 4, name: 'Lex Luthor', henchmen: []},
            {id: 5, name: 'Thanos',henchmen: [{id: 7, name: 'Loki'}]},
            {id: 6, name: 'Darkseid', henchmen: []},
            {id: 7, name: 'Loki', henchmen: []},
            {id: 8, name: 'Sabretooth', henchmen: []},
            {id: 9, name: 'Magneto', henchmen: [{id: 5, name: 'Mystique'}, {id: 4, name: 'Toad'}]},
            {id: 10, name: 'Kingpin', henchmen: []}
        ];

        return {heroes, superHeroes, averageJoes, superVillians};
    }
}