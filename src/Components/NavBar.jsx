import { styled } from 'styled-components';

const NavBarWrapper = styled.nav`
    margin: 3rem 0;
    width: 50%;
`;

const NavBarMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const NavBarMenuItem = styled.li`
    position: relative;
    padding: 0.75rem;
    a {
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 1px;
        color: var(--text-100);
        padding-bottom: 1rem;
        cursor: pointer;
        &:hover {
            color: var(--text-200);
        }
    }
    div {
        display: none;
        position: absolute;
        margin-top: 1rem;
        ul {
            li {
                margin-top: 0.75rem;
            }
        }
    }

    &:first-child {
        &:hover {
            .about {
                display: block;
                &:hover {
                    display: block;
                    color: var(--text-100);
                }
            }
        }
    }
    &:nth-child(2) {
        &:hover {
            .writing {
                display: block;
                &:hover {
                    display: block;
                    color: var(--text-100);
                }
            }
        }
    }
    &:nth-child(3) {
        &:hover {
            .portfolio {
                display: block;
                &:hover {
                    display: block;
                    color: var(--text-100);
                }
            }
        }
    }
`;

export default function NavBar() {
    return (
        <NavBarWrapper>
            <NavBarMenu>
                <NavBarMenuItem>
                    <a href="#">about</a>
                    <div className="about">
                        <ul>
                            <li>
                                <a href="https://www.ximenavengoechea.com/bio">
                                    BIO
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/press">
                                    PRESS
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/faqs">
                                    FAQS
                                </a>
                            </li>
                        </ul>
                    </div>
                </NavBarMenuItem>
                <NavBarMenuItem>
                    <a href="#">writing</a>
                    <div className="writing">
                        <ul>
                            <li>
                                <a href="https://www.ximenavengoechea.com/books">
                                    BOOKS
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/articles">
                                    ARTICLES
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/newsletter">
                                    NEWSLETTER
                                </a>
                            </li>
                        </ul>
                    </div>
                </NavBarMenuItem>
                <NavBarMenuItem>
                    <a href="#">portfolio</a>
                    <div className="portfolio">
                        <ul>
                            <li>
                                <a href="https://www.ximenavengoechea.com/illustrations">
                                    ILLUSTRATIONS
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/uxresearch">
                                    UX RESEARCH
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ximenavengoechea.com/the-life-audit">
                                    THE LIFE AUDIT
                                </a>
                            </li>
                        </ul>
                    </div>
                </NavBarMenuItem>
                <NavBarMenuItem>
                    <a href="https://www.ximenavengoechea.com/speaking">
                        speaking
                    </a>
                </NavBarMenuItem>
                <NavBarMenuItem>
                    <a href="https://www.ximenavengoechea.com/consulting">
                        consulting
                    </a>
                </NavBarMenuItem>
                <NavBarMenuItem>
                    <a href="https://www.ximenavengoechea.com/contact">
                        contact
                    </a>
                </NavBarMenuItem>
            </NavBarMenu>
        </NavBarWrapper>
    );
}
