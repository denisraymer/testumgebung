import React from 'react';

interface IButton {
  text: string
}

export const Button: React.FC<IButton> = ({
  text = 'Кнопка из библиотеки'
}) => (
  <button style={{
    backgroundColor: 'palegreen',
    width: '150px',
    height: '50px',
    color: 'white'
  }}>
    {text}
  </button>
);
