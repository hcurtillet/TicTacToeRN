import React from 'react';
import { FlatList } from 'react-native';
import { LineInterface } from '../types';
import { Cell } from './Cell';

export const Line = (props: LineInterface) => {
    const { cells, index, handlePlay } = props;
    const handlePlayLine = (yplay: number) => {
        handlePlay(index, yplay);
    };
    return (
        <FlatList
            data={cells}
            horizontal={true}
            renderItem={({ item, index }) => {
                return (
                    <Cell
                        type={item}
                        index={index}
                        handlePlay={handlePlayLine}
                    />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};
