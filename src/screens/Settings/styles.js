import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``

export const Header = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
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
  width: 130px;
  height: 130px;
`

export const UserId = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 12px;
`

export const UserName = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255 , 0.8);
`

export const UserPerfil = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #0DB060;
  margin-right: 5px;
`

export const UserTitle2 = styled.Text`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #0DB060;
  font-size: 16px;
  font-weight: bold;
`

export const TitleWrapper = styled.View`
  height: 80px;
  justify-content: center;
  padding: 0 16px;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #0DB060;
`
