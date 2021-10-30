import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  
`

export const Input = styled.input`
  height: 32px;
  font-size: 16px;
  border-radius: 20px;
  outline:none;
  padding: 0 20px;
  box-sizing: border-box;
  display: block;
  width: 200px;
  &:focus {
    outline: 2px solid white;
  }
`

export const Card = styled.div`
  height : ${(props) => ((props.height/4)-8) }px;
  @media (min-width: 400px){
    height : ${(props) => ((props.height/5)-8) }px;
  }
`
