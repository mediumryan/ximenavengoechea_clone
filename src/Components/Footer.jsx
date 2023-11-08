import { styled } from 'styled-components';
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

const FooterWrapper = styled.footer`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FooterContact = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            opacity: 0.75;
        }
        li {
            a {
                color: var(--text-200);
                font-size: 1rem;
                padding: 0.25rem;
                margin: 0.25rem;
                &:hover {
                    opacity: 1;
                    color: var(--text-100);
                }
            }
        }
    }
`;

const FooterRights = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    color: var(--text-200);
    font-size: 0.75rem;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContact>
                <ul>
                    <li>
                        <a
                            target="blank"
                            href="https://www.linkedin.com/in/ximenavengoechea"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            target="blank"
                            href="https://twitter.com/xsvengoechea"
                        >
                            <FaTwitterSquare />
                        </a>
                    </li>
                    <li>
                        <a target="blank" href="https://ximena.substack.com/">
                            <SiSubstack />
                        </a>
                    </li>
                    <li>
                        <a
                            target="blank"
                            href="https://www.instagram.com/xsvengoechea/"
                        >
                            <FaInstagramSquare />
                        </a>
                    </li>
                </ul>
            </FooterContact>
            <FooterRights>
                <p>
                    all work © Ximena Vengoechea 2014 - 2023 • all rights
                    reserved
                </p>
            </FooterRights>
        </FooterWrapper>
    );
}
