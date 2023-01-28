import { RandomPlayer } from './RandomPlayer';
import { TypeCell } from '../types';

export const BlockingPlayer = {
    ...RandomPlayer,
    play(lines: TypeCell[][]): TypeCell[][] {
        if (!this.canPlay(lines)) {
            return lines;
        }

        return BlockingPlayer.blockingPlay(lines) || this.randomPlay(lines);
    },
    blockingPlay(lines: TypeCell[][]): TypeCell[][] | undefined {
        // Check if the opponent can win in the next move
        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines.length; j++) {
                if (lines[i][j] !== TypeCell.empty) {
                    continue;
                }
                lines[i][j] = TypeCell.cross;
                const isGameOver = this.isGameOver(lines);
                if (isGameOver.result && isGameOver.winner === TypeCell.cross) {
                    lines[i][j] = TypeCell.circle;
                    return lines;
                }
                lines[i][j] = TypeCell.empty;
            }
        }

        // Ckeck if the player can win in the next move
        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines.length; j++) {
                if (lines[i][j] !== TypeCell.empty) {
                    continue;
                }
                lines[i][j] = TypeCell.circle;
                const isGameOver = this.isGameOver(lines);
                if (
                    isGameOver.result &&
                    isGameOver.winner === TypeCell.circle
                ) {
                    return lines;
                }
                lines[i][j] = TypeCell.empty;
            }
        }
    },
};
