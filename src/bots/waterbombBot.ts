import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    makeMove(gamestate: Gamestate): BotSelection {
        return 'W';
    }
}

export = new Bot();
