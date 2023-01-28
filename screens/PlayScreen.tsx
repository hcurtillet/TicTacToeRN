import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { TypeCell } from '../types';
import styled from 'styled-components';
import { Grid } from '../components/Grid';
import { RandomPlayer, BlockingPlayer, SmartPlayer, Player } from '../engine';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks';
import Icon from 'react-native-vector-icons/Entypo';

const Cross = <Icon name="cross" color="#000" size={50} />;
const Circle = <Icon name="circle" color="#000" size={35} />;

const initialGrid = [
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
    [TypeCell.empty, TypeCell.empty, TypeCell.empty],
];

export const PlayScreen = () => {
    const { t } = useTranslation();

    const { mode } = useAppSelector(state => state.mode);

    const [grid, setGrid] = useState<TypeCell[][]>(initialGrid);

    const [player, setPlayer] = useState<TypeCell>(TypeCell.cross);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [winner, setWinner] = useState<TypeCell>(TypeCell.empty);

    useEffect(() => {
        const { result, winner } = RandomPlayer.isGameOver(grid);
        if (result) {
            setIsModalVisible(true);
            winner ? setWinner(winner) : setWinner(TypeCell.empty);
            return;
        }
        switch (mode) {
            case 'Random':
                IAPlay(RandomPlayer);
                break;
            case 'Block':
                IAPlay(BlockingPlayer);
                break;
            case 'Smart':
                IAPlay(SmartPlayer);
                break;
            case 'Human':
                break;
            default:
                break;
        }
    }, [grid, player]);

    const restart = () => {
        setGrid(initialGrid);
        isModalVisible && setIsModalVisible(false);
        setWinner(TypeCell.empty);
        setPlayer(TypeCell.cross);
    };

    const IAPlay = (playerMode: typeof Player) => {
        if (player === TypeCell.circle) {
            setPlayer(TypeCell.cross);
            const newGrid = playerMode.play(grid);
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
    };

    const handlePlay = (xplay: number, yplay: number) => {
        if (player !== TypeCell.cross && mode !== 'Human') {
            return;
        }
        if (grid[xplay][yplay] !== TypeCell.empty) {
            return;
        }

        setGrid(prevState =>
            [...prevState].map((line, x) => {
                return [...line].map((cell, y) => {
                    return xplay === x && yplay === y
                        ? player
                        : prevState[x][y];
                });
            }),
        );

        setPlayer(
            player === TypeCell.circle ? TypeCell.cross : TypeCell.circle,
        );
    };

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <ModalContainer>
                    <MessageView>
                        <Text>{t('game.gameOver')}</Text>
                        <Text>{`${t('game.winner')} : ${
                            winner === TypeCell.cross
                                ? t('game.cross')
                                : t('game.circle')
                        }`}</Text>
                        <MyButton onPress={restart}>
                            <ButtonText>{t('game.restart')}</ButtonText>
                        </MyButton>
                    </MessageView>
                </ModalContainer>
            </Modal>
            <Grid lines={grid} handlePlay={handlePlay} />
            <Text style={{ fontSize: 30 }}>
                {player === TypeCell.cross ? Cross : Circle}
                {`${t('game.haveToPlay')}`}
            </Text>
            <MyButton onPress={restart}>
                <ButtonText>{t('game.restart')}</ButtonText>
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

const ModalContainer = styled(View)`
    background-color: #000000aa;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const MessageView = styled(View)`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 80%;
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

const ButtonText = styled(Text)`
    font-size: 30px;
`;
