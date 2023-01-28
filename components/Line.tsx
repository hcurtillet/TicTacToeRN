import React from 'react';
import { View } from 'react-native';
import { LineInterface } from '../types';
import { Cell } from './Cell';
import styled from 'styled-components';

export const Line = (props: LineInterface) => {
    const { cells, index, handlePlay } = props;
    const handlePlayLine = (yplay: number) => {
        handlePlay(index, yplay);
    };

    return (
        <Container>
            {cells.map((cell, index) => (
                <Cell type={cell} index={index} handlePlay={handlePlayLine} />
            ))}
        </Container>
    );
};

const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
