import styled from 'styled-components'




export const Input = styled.input`
  font-size: 16px;
  border-radius: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  display: block;
  width: 200px;
  &:focus {
    outline: 2px solid white;
  }
`

export const BigInput = styled(Input)`
   width: 100%;
   border-radius: 15px;
`



export const Card = styled.div`
  height : ${(props) => ((props.height/4)-8) }px;
  @media (min-width: 400px){
    height : ${(props) => ((props.height/5)-8) }px;
  }
`


