import { styled } from 'styled-components';

const GreetingWrapper = styled.section`
    margin-bottom: 3rem;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        letter-spacing: -0.4px;
        p:first-child {
            margin-bottom: 2rem;
        }
    }
`;

export default function Greeting() {
    return (
        <GreetingWrapper>
            <div>
                <p>Hi, I’m Ximena! </p>
                <p>I like making things and meeting new people.</p>
            </div>
        </GreetingWrapper>
    );
}
