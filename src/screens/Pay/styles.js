import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
`

export const Container = styled.ScrollView``

export const Header = styled.View`
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding: 0 16px;
`

export const Search = styled.TextInput`
  height: 40px;
  background: #fff;
  flex: 1;
  margin-left: 30px;
  border-radius: 20px;
  padding-left: 30px;
  font-size: 16px;
`

export const Title = styled.Text`
  margin: 20px 16px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const Line = styled.View`
  height: 1px;
  background: #fff;
  margin: 20px 40px; 
`
