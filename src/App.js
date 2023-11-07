import { styled } from 'styled-components';
import './CSS/index.css';
import TopBanner from './Components/TopBanner';

const MainOuter = styled.main`
    padding: 10rem;
`;

const MainInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <MainOuter>
            <MainInner>
                <TopBanner />
            </MainInner>
        </MainOuter>
    );
}

export default App;
