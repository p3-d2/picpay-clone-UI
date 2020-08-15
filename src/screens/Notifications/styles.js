import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``;

export const Header = styled.View`
  flex-direction: row;
  height: 60px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  color: #10C86E;
  font-size: 16px;
`
