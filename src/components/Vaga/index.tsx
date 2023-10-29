import * as S from './styles'
import PropsVagas from './types'

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: PropsVagas) => (
  <S.ContainerVaga>
    <S.VagaTitulo>{titulo}</S.VagaTitulo>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <S.ContainerVagaHover>
      <S.VagaLink href="#">Ver detalhes e candidatar-se</S.VagaLink>
    </S.ContainerVagaHover>
  </S.ContainerVaga>
)

export default Vaga
