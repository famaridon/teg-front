export class Level {

    constructor(
        public dices: number,
        public ships: number,
        public cost: number,
        public points: number) {

    }
}

export const LEVELS = [
    new Level(4, 2, 0, 0),
    new Level(5, 2, 2, 1),
    new Level(5, 3, 3, 2),
    new Level(6, 3, 4, 3),
    new Level(6, 4, 5, 5),
    new Level(7, 4, 6, 8),
]
