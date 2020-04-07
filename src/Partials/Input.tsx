import React from 'react';
import { Question } from '../Types';

export interface InputProps {
    action: () => void;
    question?: Question;
}

export const Input: React.FC<InputProps> = ({action, question}) => {

    const [answer, setAnswer] = React.useState('')
  
    const clearAndSubmit = () => {
        console.log(answer);
        if (isCorrect(answer, question)) {
            setAnswer('');
            action();
        } else {
            setAnswer('')
            console.log('wrong')
        }
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target.value;
        const clearWord = value.slice(-1) === ' ';

        if(clearWord) {
            clearAndSubmit();
        } else {
            setAnswer(value);
        }
    }
  
    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            clearAndSubmit();
        }
    }

    return (
        <div className="input-wrapper">
              {question && <p>{question?.question}</p>}
              <input value={answer} onChange={handleAnswerChange} onKeyPress={onKeyPress} type="text"/>
        </div>
      );
  };


  export const isCorrect = ( answer: string | number, question?: Question) => {
      return question?.answer == answer;
  }