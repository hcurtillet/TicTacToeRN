import React from 'react';
import { FlatList, View } from 'react-native';
import { GridInterface } from '../types';
import styled from 'styled-components';
import { Line } from './Line';

export const Grid = (props: GridInterface) => {
    const { lines, handlePlay } = props;

    return (
        <Container>
            <FlatList
                data={lines}
                renderItem={({ item, index }) => {
                    return (
                        <Line
                            cells={item}
                            index={index}
                            handlePlay={handlePlay}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
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
