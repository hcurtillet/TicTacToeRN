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
                <ButtonText>{t('game.mode.random')}</ButtonText>
            </Button>
            <Button onPress={() => dispatch(setMode({ mode: 'Smart' }))}>
                <ButtonText>{t('game.mode.smart')}</ButtonText>
            </Button>
            <Button onPress={() => dispatch(setMode({ mode: 'Human' }))}>
                <ButtonText>{t('game.mode.human')}</ButtonText>
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

const ButtonText = styled(Text)`
    font-size: 20px;
`;
