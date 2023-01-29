import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { TypeCell } from '../types';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
    isModalVisible: boolean;
    winner: TypeCell | null;
    restart: () => void;
};
export const WinMessageModal = (props: Props) => {
    const { isModalVisible, winner, restart } = props;

    const { t } = useTranslation();

    const renderMessage = () => {
        if (winner === null) {
            return <Text>{t('game.noWinner')}</Text>;
        }
        return (
            <Text>{`${t('game.winner')} : ${
                winner === TypeCell.cross ? t('game.cross') : t('game.circle')
            }`}</Text>
        );
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}>
            <ModalContainer>
                <MessageView>
                    {renderMessage()}
                    <MyButton onPress={restart}>
                        <ButtonText>{t('game.restart')}</ButtonText>
                    </MyButton>
                </MessageView>
            </ModalContainer>
        </Modal>
    );
};

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
