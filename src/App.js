import { styled } from 'styled-components';
import './CSS/index.css';

const MainOuter = styled.main`
    padding: 10rem 20rem;
`;

const MainInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <MainOuter>
            <MainInner>hi</MainInner>
        </MainOuter>
    );
}

export default App;
