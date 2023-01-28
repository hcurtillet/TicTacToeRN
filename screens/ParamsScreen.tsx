import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { ModeSwitcher } from '../components';

export const ParamsScreen = () => {
    const { mode } = useAppSelector(state => state.mode);
    return (
        <Container>
            <Text>This is a params screen</Text>
            <Text>The mode is : {mode}</Text>
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
