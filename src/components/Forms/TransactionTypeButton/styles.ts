import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

interface IconProps {
  type: 'up'|'down'
}

export const Container = styled(TouchableOpacity)`
  width: 48%;
  height: ${RFValue(56)}px;
  border: 1.5px solid ${({theme})=>theme.colors.text};

  border-radius: 5px;
  justify-content:center;
  align-items: center;
  flex-direction: row;

`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height:${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
`
export const Icon = styled(Feather)<IconProps>`
  font-size: 20px;
  color: ${({theme, type}) => type === 'down' ? theme.colors.attention : theme.colors.success};
  margin-right: 12px;
`