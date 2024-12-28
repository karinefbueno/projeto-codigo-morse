import * as S from  './styles'

interface InputProps {
    type?: string
    placeholder?:string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
  
  export function Input(props: InputProps) {
    return (
      <S.Input 
        type={props.type} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}  
      />
    );
  }
  