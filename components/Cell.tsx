import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CellInterface, TypeCell } from '../types';
import Icon from 'react-native-vector-icons/Entypo';
import styled from 'styled-components';

export const Cell = (props: CellInterface) => {
    const { type, index, handlePlay } = props;

    const handlePlayCell = () => {
        handlePlay(index);
    };
    switch (type) {
        case TypeCell.empty:
            return <Container onPress={handlePlayCell} />;
        case TypeCell.circle:
            return <Container onPress={handlePlayCell}>{Circle}</Container>;
        case TypeCell.cross:
            return <Container onPress={handlePlayCell}>{Cross}</Container>;
    }
};

const Container = styled(TouchableOpacity)`
    background-color: #0bb;
    width: 100px;
    height: 100px;
    border-width: 2px;
    border-color: #000;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const Circle = <Icon name="circle" color="#000" size={70} />;
const Cross = <Icon name="cross" color="#000" size={100} />;
