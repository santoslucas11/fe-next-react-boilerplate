import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo em rosa com texto React Avançado em branco"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Imagem de um programador de frente para o monitor"
    />
  </S.Wrapper>
)

export default Main
