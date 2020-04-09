import React, { useEffect } from 'react';
import { Question } from '../Types';
import { isCorrect } from '../Helpers/Helpers';

export interface InputProps {
    action: () => void;
    question?: Question;
}

export const Input: React.FC<InputProps> = ({action, question}) => {

    const [answer, setAnswer] = React.useState('')
  
    const clearAndSubmit = () => {
        if (isCorrect(answer, question)) {
            setAnswer('');
            action();
            console.log('correct')
        } else {
            setAnswer('')
        }
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target.value;
        setAnswer(value);
    }
  
    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            clearAndSubmit();
        }
    }

    let textInput: HTMLInputElement | null = null;

    useEffect(() => {
        textInput && textInput.focus();
    })

    return (
        <div className="input-wrapper">
              {question && <p>{question?.value}</p>}
              <input ref={(input) => textInput = input} value={answer} onChange={handleAnswerChange} onKeyPress={onKeyPress} type="text"/>
        </div>
      );
  };

