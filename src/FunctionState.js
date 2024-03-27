import React, { useState } from 'react';

const FunctionState = () => {
  // useState 인자 : 상태의 초깃값
  // 배열 첫 번째 원소 : 현재 상태
  // 배열 두 번째 원소 : Setter 함수(상태를 바꾸어 주는 함수)
  const [msg, setMsg] = useState('click');
  const onClickEnter = () => setMsg('hello!');
  const onClickLeave = () => setMsg('bye!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>

      <br /><br />

      <button style={{ color: 'green' }} onClick={() => setColor('green')}>green</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>blue</button>
      <button style={{ color: 'gray' }} onClick={() => setColor('gray')}>gray</button>

      <h1 style={{ color }}>{msg}</h1>
    </div>
  );
};

export default FunctionState;