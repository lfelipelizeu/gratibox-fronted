import { useState } from 'react';
import { PlanBox, ImgBox, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import States from './States.js';
import styled from 'styled-components';

export default function Shipping() {
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState();

    function zipcodeTyping (event) {
        const newValue = event.target.value;

        if ((typeof(Number(newValue[newValue.length - 1])) === "number" && newValue[newValue.length - 1] !== " " && !isNaN(Number(newValue[newValue.length - 1]))) || newValue === "") {
            setZipcode(newValue);
        } else {
            setZipcode(zipcode);
        }
    }

    function submitShipping(event) {
        event.preventDefault();

        if (!state) return alert('Selecione o estado!');

        const shippingAdress = {
            name,
            adress,
            zipcode,
            city,
            state,
        };

        console.log(shippingAdress);
    }

    return (
        <Container>
            <WelcomeUser>Bom te ver por aqui, @User.</WelcomeUser>
            <Quote>
                “Agradecer é arte de atrair coisas boas”
            </Quote>
            <form onSubmit={submitShipping}>
                <Box>
                    <NewImgBox>
                        <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true' alt='Plano' />
                    </NewImgBox>
                    <Input
                        type='text'
                        placeholder='Nome completo'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <Input
                        type='text'
                        placeholder='Endereço de entrega'
                        value={adress}
                        onChange={(event) => setAdress(event.target.value)}
                        required
                    />
                    <Input
                        type='text'
                        placeholder='CEP'
                        maxLength='8'
                        value={zipcode}
                        onChange={(event) => zipcodeTyping(event)}
                        required
                    />
                    <LastRow>
                        <CityInput
                            type='text'
                            placeholder='Cidade'
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            required
                        />
                        <States setState={setState} />
                    </LastRow>
                </Box>
                <SubmitButton>
                    Finalizar
                </SubmitButton>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 95%;
    max-width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const WelcomeUser = styled.h1`
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    margin: 20% 0 22px;
`;

const Quote = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    margin-bottom: 20px;
    text-align: left;
`

const Box = styled(PlanBox)`
    height: 450px;
    max-height: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 0;
`;

const NewImgBox = styled(ImgBox)`
    height: 40%;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 90%;
    min-height: 10%;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    border: none;
    font-size: 18px;
    color: #4d65a8;
    display: block;
    margin: 0 auto 7px;
    padding-left: 12px;

    ::placeholder {
        font-weight: 700;
        color: #4d65a8;
    }
`;

const LastRow = styled.div`
    width: 90%;
    height: 45px;
    display: flex;
    margin: 0 auto;
`;

const CityInput = styled(Input)`
    width: 60%;
    height: 100%;
    margin: 0 13px 0 0;
`;

const SubmitButton = styled(SubscribeButton)`
    width: 200px;
    height: 40px;
    margin: 7px auto 7px;
`;
