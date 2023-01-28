import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TypeCell } from '../types';
import styled from 'styled-components';
import { Grid } from '../components/Grid';
import { RandomPlayer } from '../engine';
import { t } from 'i18next';

const initialGrid = [
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
];

export const PlayScreen = () => {
    const [grid, setGrid] = useState<TypeCell[][]>(initialGrid);

    const [player, setPlayer] = useState<TypeCell>(TypeCell.cross);

    useEffect(() => {
        if (player === TypeCell.circle) {
            setPlayer(TypeCell.cross);
            const newGrid = RandomPlayer.play(grid);
            setGrid(prevState =>
                [...prevState].map((line, x) => {
                    return [...line].map((cell, y) => {
                        return newGrid[x][y] !== prevState[x][y]
                            ? newGrid[x][y]
                            : prevState[x][y];
                    });
                }),
            );
        }
    }, [grid]);

    const restart = () => {
        setGrid(initialGrid);
    };

    const handlePlay = (xplay: number, yplay: number) => {
        if (player !== TypeCell.cross) {
            return;
        }
        if (grid[xplay][yplay] !== TypeCell.empty) {
            return;
        }

        setGrid(prevState =>
            [...prevState].map((line, x) => {
                return [...line].map((cell, y) => {
                    return xplay === x && yplay === y
                        ? TypeCell.cross
                        : prevState[x][y];
                });
            }),
        );

        setPlayer(TypeCell.circle);
    };

    return (
        <Container>
            <Grid lines={grid} handlePlay={handlePlay} />
            <MyButton onPress={restart}>
                <Text>{t('game.restart')}</Text>
            </MyButton>
        </Container>
    );
};

const Container = styled(View)`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const MyButton = styled(TouchableOpacity)`
    background-color: #0bb;
    width: 200px;
    border-width: 2px;
    border-color: #000;
    border-radius: 10px;
    margin: 20px;
    align-items: center;
    justify-content: center;
`;
