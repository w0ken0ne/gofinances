import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.TouchableOpacity.attrs({
  activeOpacity:0.7
})`

  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
  border-radius: 5px;
  height:56px;
  padding: 18px 16px;
  
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme})=>theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: 21px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=>theme.colors.text}
`