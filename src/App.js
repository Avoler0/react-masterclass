import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
  background-color:${props=> props.theme.backgroundColor};
`;

const click = ({theme}) => {
  
    console.log(theme);
}

function App() {
  return <Wrapper>
    <Title onClick={click}>Hello</Title>
  </Wrapper>
}

export default App;
