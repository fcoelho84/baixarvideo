import Styled from 'styled-components/native'

export const Container = Styled.View`
    flex: 1;
`

export const Img = Styled.Image`
    flex: 0.5;
    resize-mode: cover;
`

export const Title = Styled.Text`
    font-size: 20px;
    margin: 16px;
    color: #111;

`


export const ButtomText = Styled.Text`
    font-size: 20px;
    color: #fff;

`

export const Buttom = Styled.TouchableOpacity`
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    background: #2196F3;
    flex: 0.08;
    margin: 16px;
    border-radius: 5px;

`