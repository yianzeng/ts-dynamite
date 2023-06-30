import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    makeMove(gamestate: Gamestate): BotSelection {
        return 'D';
    }
}

export = new Bot();
