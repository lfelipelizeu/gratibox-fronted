import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContexts.js';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
    const { user } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            return history.push('/');
        }
    }, [user, history]);

    return (
        <Container>
            <Welcome>Bem vindo ao <strong>GratiBox</strong></Welcome>
            <Description>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Description>
            <Image src='https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image05.webp' alt='Home' />
            <SignUpButton onClick={() => history.push('/signup')}>Quero começar</SignUpButton>
            <LogInButton onClick={() => history.push('/login')}>Já sou grato</LogInButton>
            <Footer />
        </Container>
    );
}

const Container = styled.section`
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & button {
        width: 200px;
        height: 45px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
    }

    @media (min-width: 500px) {
        width: 500px;
    }
`

const Footer = styled.div`
    width: 100vw;
    height: 50%;
    background-color: #4d65a8;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;

    @media (min-width: 500px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`

const Welcome = styled.h1`
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 44px;

    & strong {
        font-weight: 700;
    }
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    text-align: center;
`;

const Image = styled.img`
    width: 100vw;

    @media (min-width: 500px) {
        width: 100%;
    }
`;

const SignUpButton = styled.button`
    border-radius: 10px;
    background-color: #8c97ea;
    margin: -30px 0 10px;
`;

const LogInButton = styled.button`
    background-color: transparent;
`
