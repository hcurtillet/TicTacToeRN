import { TypeCell } from '../types';
import { Const } from './Const';
import { Player } from './Player';

export const RandomPlayer = {
    ...Player,
    ramdomPlay: (lines: TypeCell[][]): TypeCell[][] => {
        if (!Player.canPlay(lines)) {
            return lines;
        }

        let lineIndex = Math.floor(Math.random() * Const.gridSize);
        let cellIndex = Math.floor(Math.random() * Const.gridSize);
        while (lines[lineIndex][cellIndex] !== TypeCell.empty) {
            lineIndex = Math.floor(Math.random() * Const.gridSize);
            cellIndex = Math.floor(Math.random() * Const.gridSize);
        }
        lines[lineIndex][cellIndex] = TypeCell.circle;
        return lines;
    },
};
