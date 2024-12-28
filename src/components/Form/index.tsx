import * as S from './styles';
import { Input } from '../Input';
import { useState } from 'react';
import { convertToMorse } from '../../helper/convertToMorse';
import { playMorse } from '../../helper/playMorse';
import * as Tone from "tone";
import { Button } from '../Button';

export function Form() {
  const [inputPhrase, setInputPhrase] = useState("");
  const [morseCode, setMorseCode] = useState<string>("");
  const [audioStarted, setAudioStarted] = useState(false);

  const startAudio = async () => {
    await Tone.start();
    setAudioStarted(true);
  };

  const handleSubmit = async () => {
    if (!audioStarted) {
      alert("Clique em 'Iniciar Áudio' antes de continuar!");
      return;
    }
    const morseCode = convertToMorse(inputPhrase);
    setMorseCode(morseCode);
  };

  const handleListen = async () => {
    if (!audioStarted) {
      alert("Clique em 'Iniciar Áudio' antes de continuar!");
      return;
    }
    await playMorse(morseCode);
  };

  return (
    <S.Form>
      {!audioStarted ? (
        <Button 
          onClick={startAudio} 
          text='Iniciar'
        />
      ) : !morseCode ? (
        <>
          <S.Title>Digite sua frase</S.Title>
          <Input 
            type='text' 
            value={inputPhrase}
            onChange={(e) => setInputPhrase(e.target.value)}
          />
          <Button onClick={handleSubmit} text='Enviar'/>
        </>
      ) : (
        <>
          <S.Title>Morse</S.Title>
          <S.Paragraph>{morseCode}</S.Paragraph>
          <Button onClick={handleListen} text='Ouvir'/>
        </>
      )}
    </S.Form>
  );
}
