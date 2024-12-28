import * as S from  './styles'

interface ButtonProps {
  onClick: () => Promise<void>
  text?: string
  color?: string
  background?: string
}

export function Button( props: ButtonProps) {
  return (
    <S.Button
      onClick={props.onClick}
      color={props.color}
      background={props.background} 
    >
      {props.text}
    </S.Button>
  );
}
