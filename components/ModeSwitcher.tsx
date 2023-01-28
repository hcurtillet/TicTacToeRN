import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks';
import { setMode } from '../store/mode/modeSlice';
import styled from 'styled-components';

export const ModeSwitcher = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    return (
        <Container>
            <Button onPress={() => dispatch(setMode({ mode: 'Random' }))}>
                <Text>{t('game.mode.random')}</Text>
            </Button>
            <Button onPress={() => dispatch(setMode({ mode: 'Smart' }))}>
                <Text>{t('game.mode.smart')}</Text>
            </Button>
            <Button onPress={() => dispatch(setMode({ mode: 'Human' }))}>
                <Text>{t('game.mode.human')}</Text>
            </Button>
        </Container>
    );
};

const Container = styled(View)`
    flex-direction: row;
`;

const Button = styled(TouchableOpacity)`
    background-color: #0bb;
    border: 1px solid #055;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    align-content: center;
    justify-content: center;
`;
