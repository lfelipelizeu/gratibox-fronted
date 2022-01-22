import { useContext, useState, useEffect } from 'react';
import UserContext from '../contexts/UserContexts.js';
import { useHistory } from 'react-router-dom';
import { signUp } from '../services/gratibox.js';
import styled from 'styled-components';

export default function Home() {
    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            return history.push('/');
        }
    }, [user, history]);

    async function submitSignUp(event) {
        event.preventDefault();

        const body = {
            name,
            email,
            password,
            repeatPassword,
        };

        if (password !== repeatPassword) return alert('As senhas devem coincidir!');
        if (password.length < 5) return alert('A senha deve ter entre 5 e 16 caracteres alfanuméricos!');

        setLoading(true);
        try {
            await signUp(body);
            alert('Cadastrado com sucesso!');
            setLoading(false);
            return history.push('/login');
        } catch (error) {
            const status = error.response?.status;
            setLoading(false);

            if (status === 400) return alert('Dados inválidos');
            if (status === 409) return alert('Email já cadastrado!');
            if (!status) return alert('Servidor offline!');
            return alert('Erro desconhecido'); 
        }
    }

    return (
        <Container>
            <Welcome>Bem vindo ao <strong>GratiBox</strong></Welcome>
            <FormBox onSubmit={submitSignUp}>
                <Input
                    type='text'
                    placeholder='Nome'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    disabled={loading}
                    required
                />
                <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={loading}
                    required
                />
                <Input
                    type='password'
                    placeholder='Senha'
                    maxLength='16'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={loading}
                    required
                />
                <Input
                    type='password'
                    placeholder='Confirmar senha'
                    maxLength='16'
                    value={repeatPassword}
                    onChange={(event) => setRepeatPassword(event.target.value)}
                    disabled={loading}
                    required
                />
                <Button type='submit' disabled={loading}>
                    Cadastrar
                </Button>
            </FormBox>
            <LogInButton onClick={() => history.push('/login')}>Já sou grato</LogInButton>
        </Container>
    );
}

const Container = styled.section`
    width: 80vw;
    max-width: 500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
    filter: ${({ disabled }) => disabled ? 'brightness(0.9)' : 'none'};
`;

const LogInButton = styled.button`
    width: 200px;
    height: 45px;
    border: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background-color: transparent;
`
