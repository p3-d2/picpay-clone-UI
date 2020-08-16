import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`

export const Header = styled.View`
  height: 300px;
  background: #fff;
  align-items: center;
  justify-content: center;
`

export const UserTitle = styled.Text`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #0DB060;
  font-size: 18px;
  font-weight: bold;
`

export const UserImg = styled.Image`
  width: 200px;
  height: 100px;
`

export const UserId = styled.Text`
  font-size: 20px;
`

export const UserName = styled.Text`
  font-size: 18px;
`

export const SubTitle = styled.Text`
  font-size: 16px;
`
