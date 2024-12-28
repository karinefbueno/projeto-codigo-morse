import * as S from './styles'
import maquina from '../../assets/codigoMorse.jpeg'
import { Form } from '../../components/Form';

function Home() {
  
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>
          Conversor de Código Morse
        </S.Title>
        <S.Imagem
          src={maquina}
          alt="Máquina Código Morse"
        />
      </S.ContainerTitle>
      <Form/>
    </S.Container>
  );
}

export default Home;
