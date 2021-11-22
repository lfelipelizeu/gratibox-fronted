import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContexts.js';
import { useHistory } from 'react-router-dom';
import { logIn } from '../services/gratibox.js';
import styled from 'styled-components';

export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            return history.push('/');
        }
    }, [user, history]);

    async function submitLogIn(event) {
        event.preventDefault();

        const body = {
            email,
            password,
        };

        setLoading(true);
        try {
            const response = await logIn(body);
            const loggedUser = response.data;
            setUser(loggedUser);
            localStorage.setItem('user', JSON.stringify(loggedUser));
            setLoading(false);
            return history.push('/');
        } catch (error) {
            const status = error.response?.status;
            setLoading(false);

            if (status === 404) return alert('Email inválido!');
            if (status === 401) return alert('Senha incorreta!');
            if (!status) return alert('Servidor offline!');
            return alert('Erro desconhecido'); 
        }
    } 

    return (
        <Containter>
            <Welcome>Bem vindo ao <strong>GratiBox</strong></Welcome>
            <FormBox onSubmit={submitLogIn}>
                <Input
                    className='email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={loading}
                    required
                />
                <Input
                    className='password'
                    type='password'
                    placeholder='Senha'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={loading}
                    required
                />
                <LogInButton type='submit' disabled={loading}>
                    Login
                </LogInButton>
            </FormBox>
            <SignUpButton disabled={loading}>Ainda não sou grato</SignUpButton>
        </Containter>
    );
}

const Containter = styled.section`
    width: 80vw;
    max-width: 500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const FormBox = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 64px;
    border: 1px solid #604848;
    border-radius: 10px;
    font-size: 24px;
    padding-left: 17px;
    margin-bottom: 8px;

    ::placeholder {
        font-weight: 500;
        color: rgba(96, 72, 72, 0.4);
    }
`;

const LogInButton = styled.button`
    width: 237px;
    height: 56px;
    border: none;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;
    border-radius: 10px;
    background-color: #8c97ea;
    margin-top: 150px;
    filter: ${({ disabled }) => disabled ? 'brightness(0.9)' : 'none'};
`;

const SignUpButton = styled.button`
    width: 237px;
    height: 56px;
    border: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
    margin-top: 10px;
    filter: ${({ disabled }) => disabled ? 'brightness(0.9)' : 'none'};
`;
