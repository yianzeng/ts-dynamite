import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    //
    myDynamiteCount: number = 0;
    oppDynamiteCount: number = 0;

    getRandomMove(array): BotSelection {
        return array[Math.floor(Math.random() * array.length)]
    }

    losingPairs = {
        'R': ['P', 'D'],
        'S': ['R', 'D'],
        'P': ['S', 'D'],
        'W': ['R', 'P', 'S'],
        'D': ['W']
    }

    winnningPairs = {
        'R': ['S'],
        'S': ['P'],
        'P': ['R'],
        'W': ['D'],
        'D': ['R', 'P', 'S']
    }

    makeMove(gamestate: Gamestate): BotSelection {
        let array: BotSelection[] = ['R', 'P', 'S', 'W']
        if (this.myDynamiteCount < 100) {
            array.push('D')
        }
        // Random first move
        if (gamestate.rounds.length == 0) {
            console.log('RANDOM')
            const randomMove: BotSelection = this.getRandomMove(array);
            if (randomMove == 'D') {
                this.myDynamiteCount += 1;
            }
            return randomMove;

        }
        const myLastMove: BotSelection = gamestate.rounds.at(-1).p1;
        const oppLastMove: BotSelection = gamestate.rounds.at(-1).p2;
        console.log(myLastMove)
        if (this.losingPairs[myLastMove].includes(oppLastMove)) { // if i lost, return winning thing, unless winning thing is waterballoon

            let futureMove = this.getRandomMove(this.winnningPairs[myLastMove])
            if (futureMove == 'D' && this.myDynamiteCount < 100) {
                this.myDynamiteCount += 1;
            } else {
                futureMove = this.getRandomMove(['R', 'P', 'S'])
            }
            return futureMove
        } else if (this.winningPairs[myLastMove].includes(oppLastMove){ // if i won, choose a different tactic
            const index = array.indexOf(myLastMove);
            let futureMove = this.getRandomMove(array.splice(index, 1))
            if (futureMove == 'D') {
                this.myDynamiteCount += 1;
            }
            return futureMove
        } else {
            const randomMove: BotSelection = this.getRandomMove(array);
            if (randomMove == 'D') {
                this.myDynamiteCount += 1;
            }
            return randomMove;
        }


        //
        // if (this.dynamiteCount < 100) {
        //     array.push('D');
        // }
        //
        //
        // if (lastMove == 'D' && this.dynamiteCount < 100) {
        //     this.dynamiteCount += 1;
        //     console.log('helo');
        //     console.log(this.dynamiteCount);
        //     return lastMove;
        // } else {
        //     console.log('smthing else');
        //     console.log(array[Math.floor(Math.random() * array.length)]);
        //     return array[Math.floor(Math.random() * array.length)]
        // }
    }
}

export = new Bot();
