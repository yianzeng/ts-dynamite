import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    dynamiteCount: number = 0;

    makeMove(gamestate: Gamestate): BotSelection {
        const array: BotSelection[] = ['R', 'P', 'S', 'W']
        if (this.dynamiteCount < 99) {
            array.push('D');
        }
        const randomMove: BotSelection = array[Math.floor(Math.random() * array.length)];
        if (randomMove == 'D') {
            this.dynamiteCount += 1
        }
        return randomMove;
    }
}

export = new Bot();
