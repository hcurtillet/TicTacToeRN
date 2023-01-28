import { BlockingPlayer } from './BlockingPlayer';
import { TypeCell } from '../types';

export const SmartPlayer = {
    ...BlockingPlayer,
    play(lines: TypeCell[][]): TypeCell[][] {
        if (!this.canPlay(lines)) {
            return lines;
        }

        return (
            this.blockingPlay(lines) ||
            this.smartPlay(lines) ||
            this.randomPlay(lines)
        );
    },
    smartPlay(lines: TypeCell[][]): TypeCell[][] | undefined {
        if (lines[0][1] === TypeCell.empty) {
            lines[0][1] = TypeCell.circle;
            return lines;
        }

        if (lines[1][0] === TypeCell.empty) {
            lines[1][0] = TypeCell.circle;
            return lines;
        }

        if (lines[1][2] === TypeCell.empty) {
            lines[1][2] = TypeCell.circle;
            return lines;
        }

        if (lines[2][1] === TypeCell.empty) {
            lines[2][1] = TypeCell.circle;
            return lines;
        }
    },
};
