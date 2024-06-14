//  Button
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//  1. 버튼생성 -  버튼 보내주는 컴포넌트
//  2. 버튼 사이즈 조정하기   (large, medium, small)
//  3. 버튼 색상 설정하기     (blue, gray, pink)
//  4. outline 옵션 : 버튼에서 테두리만 보여지게 설정
//  5. fullWidth : 버튼이 전체 너비를 차지하도록 구현
function Button({children, size, color, outline, fullWidth, ...rest}) {
  //  className='Button largse'   - className이 여러 개일 경우
  //  ['Button', size].join(' ') or `Button ${size}`
  //  클래스에 관련된 처리를 쉽게하는 라이브러리 - classnames
  return ( 
    <button 
    className={classNames('Button', size, color, {outline, fullWidth})}
    {...rest}
    >
      {children}
  </button>
  );
}

//  Component props default...
Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
