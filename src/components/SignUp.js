import { useContext, useState, useEffect } from 'react';
import UserContext from '../contexts/UserContexts.js';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (user) {
            return history.push('/');
        }
    }, [user, history]);

    return (
        <Containter>
            <Welcome>Bem vindo ao <strong>GratiBox</strong></Welcome>
            <FormBox>
                <Input
                    type='text'
                    placeholder='Nome'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <Input
                    type='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Senha'
                    maxLength='16'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Confirmar senha'
                    maxLength='16'
                    required
                    value={repeatPassword}
                    onChange={(event) => setRepeatPassword(event.target.value)}
                />
                <Button type='submit'>
                    Cadastrar
                </Button>
            </FormBox>
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

    & button {
        
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
        color: rgba(96, 72, 72, 0.4)
    }
`;

const Button = styled.button`
    width: 237px;
    height: 56px;
    border: none;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;
    border-radius: 10px;
    background-color: #8c97ea;
    margin-top: 54px;
`;
