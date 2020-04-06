import React from 'react';

export const Input: React.FC<{action: () => void}> = ({action}) => {

    const [name, setName] = React.useState('')
  
    const clearAndSubmit = () => {
        console.log(name);
        setName('');
        action();
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target.value;
        const clearWord = value.slice(-1) === ' ';

        if(clearWord) {
            clearAndSubmit();
        } else {
            setName(value);
        }
    }
  
    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            clearAndSubmit();
        }
    }

    return (
              <input value={name} onChange={handleNameChange} onKeyPress={onKeyPress} type="text"/>
      );
  };