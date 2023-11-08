import { styled } from 'styled-components';
import './CSS/index.css';
import TopBanner from './Components/TopBanner';
import NavBar from './Components/NavBar';
import Greeting from './Components/Greeting';
import Slider from './Components/Slider';
import Footer from './Components/Footer';

const MainOuter = styled.main`
    padding: 10rem;
    background-color: var(--bg-100);
`;

const MainInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <MainOuter>
            <MainInner>
                <TopBanner />
                <NavBar />
                <Greeting />
                <Slider />
                <Footer />
            </MainInner>
        </MainOuter>
    );
}

export default App;
