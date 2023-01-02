import * as S from './Main.styles'

export default function Main2() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="imagem de um átomo em rosa com texto React Avançado em branco"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Imagem de um programador de frente para o monitor"
      />
    </S.Wrapper>
  )
}
