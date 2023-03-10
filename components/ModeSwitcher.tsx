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
        <View>
            <RowContainer>
                <Button onPress={() => dispatch(setMode({ mode: 'Random' }))}>
                    <ButtonText>{t('game.mode.random')}</ButtonText>
                </Button>
                <Button onPress={() => dispatch(setMode({ mode: 'Smart' }))}>
                    <ButtonText>{t('game.mode.smart')}</ButtonText>
                </Button>
            </RowContainer>
            <RowContainer>
                <Button onPress={() => dispatch(setMode({ mode: 'Block' }))}>
                    <ButtonText>{t('game.mode.block')}</ButtonText>
                </Button>
                <Button onPress={() => dispatch(setMode({ mode: 'Human' }))}>
                    <ButtonText>{t('game.mode.human')}</ButtonText>
                </Button>
            </RowContainer>
        </View>
    );
};

const RowContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Button = styled(TouchableOpacity)`
    width: 40%;
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
    text-align: center;
`;
