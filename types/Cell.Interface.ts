import { TypeCell } from './TypeCell';

export interface CellInterface {
    type: TypeCell;
    index: number;
    handlePlay: (y: number) => void;
}
