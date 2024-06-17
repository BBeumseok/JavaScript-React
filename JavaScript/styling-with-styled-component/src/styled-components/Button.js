import React from "react";
import styled, { css } from "styled-components";
import {lighten, darken} from "polished"; //  라이브러리 설치 후 polished import

/* 
  Sass를 사용할 때에는 lighten() or darken()과 같은 유틸 함수를 사용하여
  색상에 변화를 줄 수 있었다.
  CSS in JS에서도 비슷한 유틸 함수를 사용하고 싶다면 polished 라는 라이브러리를
  사용하면 된다.

*/


//  비구조화 할당 문법을 사용하여 가독성을 높여줄 수 있다.
const colorStyle = css`
  ${({theme, color}) => {
    // props.color는 StyledButton 컴포넌트에서 전달한 props.color값
    const selected = theme.palette[color]; 
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
        ${props =>
          props.outline &&
          css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
          background: ${selected};
          color: white;
          }
          `}
    `;
  }}
`;

//  중복되는 코드들을 리팩토링 하여 간략화 및 재사용성 용이
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}

//  나중에 유지보수 시 더욱 편하게 할 수 있도록 분리하여 설정
const sizeStyles = css`
  ${({size}) => 
    css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}
`;

const fullWidth = css `
  ${props =>
    props.fullWidth &&
    css`
    width: 100%;
    justify-content: center;
    &:not(:first-child) {  
    margin-left: 0rem;
    margin-top: 1rem;
    }
    `}
`;

/* 
    ThemeProvider로 설정한 값은 styled-components에서 props.theme로
    조회할 수 있다.
*/
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyle}

  /* 첫 번째 요소가 아닌 경우에 적용되는 내용 */
  &:not(:first-child) {
    margin-left: 1rem;
  }
  
  /* 기타 */
  & + & {
    margin-right: 1rem;
  } 

  /* full fill */
  ${fullWidth}
`

  /* 
    색상 코드를 지닌 변수를 Button.js에서 선언하는 대신에
    ThemeProvider 라는 기능을 사용하여 stlyed-components로 만드는 모든
    컴포넌트에서 조회하여 사용할 수 있는 전역적인 값을 설정할 수 있다.
  */
function Button({children, color, size, outline, fullWidth, ...rest}){
  return <StyledButton 
  color={color} 
  size={size} 
  outline={outline}
  fullWidth={fullWidth}
  {...rest}>
  {children}
    </StyledButton>;
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};


export default Button;