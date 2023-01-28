import { Text, View } from 'react-native';
import styled from 'styled-components';

export const ParamsScreen = () => {
    return (
        <Container>
            <Text>This is a params screen</Text>
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
