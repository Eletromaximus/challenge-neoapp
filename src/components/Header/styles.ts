import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 160px;
  background-color: #DE2C2C;
  padding: 10px;
`

export const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;
  border-radius: 5px;
  background-color: #FFFFFF;
  margin: 0 50px;
`

export const RightStyle = styled.div`
  display: flex;
  width: 75%;
  margin-right: 100px;
`

export const NumberItemsStyle = styled.div`
  position: relative;
  z-index: 1;
  width: 10px;
  height: 10px;
  margin-left: 28px;
  margin-top: -30px;
  border-radius: 50px;

  background-color: yellow;
`

export const InputStyle = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  border-radius: 5px;

  :focus {
    outline: none;
  }

`
