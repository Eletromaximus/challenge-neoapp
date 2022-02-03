import styled, { css } from 'styled-components'
import breakpointsMedia from '../../utils/breakpointsMedia'

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #DE2C2C;
  padding: 10px;
  
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      justify-content: center;
      height: 160px;
      `,
    sm: css`
      justify-content: space-between;
      flex-direction: column;
      height: 230px;
    `,
    xs: css`
    flex-direction: column;
  `
  })}
`

export const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 58px;
  border-radius: 5px;
  background-color: #FFFFFF;
  margin: 0;
  
  /* ${breakpointsMedia({
    md: css`
      margin: 0 50px;
    `,
    sm: css`
    `
  })} */
`

export const RightStyle = styled.div`
  display: flex;
  /* margin-right: 50px; */
  
  ${breakpointsMedia({
    md: css`
      display: flex;
      width: 75%;
    `,
    sm: css`
      display: flex;
      width: 100%;
    `,
    xs: css`
      display: flex;
      width: 100%;
      margin: 0;
    `
  })}
`

export const NumberItemsStyle = styled.div`
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  margin-left: 30px;
  margin-top: -50px;
  border-radius: 50px;

  background-color: yellow;
`

export const InputStyle = styled.input`
  width: 92%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding-left: 5px;

  :focus {
    outline: none;
  }

`
