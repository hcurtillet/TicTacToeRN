import { TypeCell } from '../types';

export const Player = {
    canPlay: (lines: TypeCell[][]): boolean => {
        return lines.some(line => line.some(cell => cell === TypeCell.empty));
    },
    isGameOver: (lines: TypeCell[][]): boolean => {
        return (
            !Player.canPlay(lines) ||
            Player.hasWon(lines, TypeCell.cross) ||
            Player.hasWon(lines, TypeCell.circle)
        );
    },
    hasWon: (lines: TypeCell[][], type: TypeCell): boolean => {
        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                if (lines[i][j] === type) {
                    if (
                        lines[i][0] === type &&
                        lines[i][1] === type &&
                        lines[i][2] === type
                    ) {
                        return true;
                    }
                    if (
                        lines[0][j] === type &&
                        lines[1][j] === type &&
                        lines[2][j] === type
                    ) {
                        return true;
                    }
                    if (
                        lines[0][0] === type &&
                        lines[1][1] === type &&
                        lines[2][2] === type
                    ) {
                        return true;
                    }
                    if (
                        lines[0][2] === type &&
                        lines[1][1] === type &&
                        lines[2][0] === type
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
};
