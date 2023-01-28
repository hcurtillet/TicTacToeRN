import { TypeCell } from '../types';

export const Player = {
    play: (lines: TypeCell[][]): TypeCell[][] => {
        return lines;
    },
    canPlay: (lines: TypeCell[][]): boolean => {
        return lines.some(line => line.some(cell => cell === TypeCell.empty));
    },
    isGameOver: (
        lines: TypeCell[][],
    ): {
        result: boolean;
        winner?: TypeCell;
        solution?: { x: number; y: number }[];
    } => {
        const hasWonCrossPlayer = Player.hasWon(lines, TypeCell.cross);
        if (hasWonCrossPlayer.result) {
            return {
                result: true,
                winner: TypeCell.cross,
                solution: hasWonCrossPlayer.solution,
            };
        }
        const hasWonCirclePlayer = Player.hasWon(lines, TypeCell.circle);
        if (hasWonCirclePlayer.result) {
            return {
                result: true,
                winner: TypeCell.circle,
                solution: hasWonCirclePlayer.solution,
            };
        } else if (!Player.canPlay(lines)) {
            return { result: true };
        }
        return { result: false };
    },
    hasWon: (
        lines: TypeCell[][],
        type: TypeCell,
    ): { result: boolean; solution?: { x: number; y: number }[] } => {
        for (let i = 0; i < lines.length; i++) {
            if (
                lines[i][0] === type &&
                lines[i][1] === type &&
                lines[i][2] === type
            ) {
                return {
                    result: true,
                    solution: [
                        { x: i, y: 0 },
                        { x: i, y: 1 },
                        { x: i, y: 2 },
                    ],
                };
            }
            if (
                lines[0][i] === type &&
                lines[1][i] === type &&
                lines[2][i] === type
            ) {
                return {
                    result: true,
                    solution: [
                        { x: 0, y: i },
                        { x: 1, y: i },
                        { x: 2, y: i },
                    ],
                };
            }
            if (
                lines[0][0] === type &&
                lines[1][1] === type &&
                lines[2][2] === type
            ) {
                return {
                    result: true,
                    solution: [
                        { x: 0, y: 0 },
                        { x: 1, y: 1 },
                        { x: 2, y: 2 },
                    ],
                };
            }
            if (
                lines[0][2] === type &&
                lines[1][1] === type &&
                lines[2][0] === type
            ) {
                return {
                    result: true,
                    solution: [
                        { x: 0, y: 2 },
                        { x: 1, y: 1 },
                        { x: 2, y: 0 },
                    ],
                };
            }
        }
        return { result: false };
    },
};
