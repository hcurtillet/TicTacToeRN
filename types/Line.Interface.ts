import { TypeCell } from './TypeCell';

export interface LineInterface {
    cells: TypeCell[];
    index: number;
    handlePlay: (x: number, y: number) => void;
}
