import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { ModeSwitcher } from '../components';
import { useTranslation } from 'react-i18next';

export const ParamsScreen = () => {
    const { mode } = useAppSelector(state => state.mode);
    const { t } = useTranslation();
    return (
        <Container>
            <MyText>{t('game.selectMode')}</MyText>
            <MyText>{`${t('game.currentMode')} : ${mode}`}</MyText>
            <ModeSwitcher />
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

const MyText = styled(Text)`
    font-size: 20px;
`;
