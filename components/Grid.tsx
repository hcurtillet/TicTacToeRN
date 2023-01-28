import React from 'react';
import { View } from 'react-native';
import { GridInterface } from '../types';
import styled from 'styled-components';
import { Line } from './Line';

export const Grid = (props: GridInterface) => {
    const { lines, handlePlay } = props;

    return (
        <Container>
            {lines.map((item, index) => (
                <Line
                    cells={item}
                    index={index}
                    key={index}
                    handlePlay={handlePlay}
                />
            ))}
        </Container>
    );
};

const Container = styled(View)`
    background-color: #ff0;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
`;
