import { TypeCell } from './TypeCell';

export interface GridInterface {
    lines: TypeCell[][];
    handlePlay: (x: number, y: number) => void;
}
