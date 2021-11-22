import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PlanBox, ImgBox, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import Plans from './Plans.js';
import DeliveryDay from './DeliveryDay.js';
import Items from './Items.js';
import styled from 'styled-components';

export default function Subscribe() {
    const { plan } = useParams();
    const [opened, setOpened] = useState([false, true, false]);
    const [planOption, setPlanOption] = useState(plan);
    const [deliveryDay, setDeliveryDay] = useState('');
    const [items, setItems] = useState([]);

    function openBox(index) {
        const changeOpened = [false, false, false];
        changeOpened[index] = true;
        setOpened(changeOpened);
    }

    return (
        <Container>
            <WelcomeUser>Bom te ver por aqui, @User.</WelcomeUser>
            <Quote>
                “Agradecer é arte de atrair coisas boas”
            </Quote>
            <Box>
                <NewImgBox>
                    <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true' alt='Plano' />
                </NewImgBox>
                <Plans
                    opened={opened}
                    openBox={openBox}
                    planOption={planOption}
                    setPlanOption={setPlanOption}
                />
                <DeliveryDay
                    opened={opened}
                    openBox={openBox}
                    deliveryDay={deliveryDay}
                    setDeliveryDay={setDeliveryDay}
                />
                <Items
                    opened={opened}
                    openBox={openBox}
                    items={items}
                    setItems={setItems}
                />
            </Box>
            <NextButton>
                Próximo
            </NextButton>
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
`;

const NextButton = styled(SubscribeButton)`
    width: 200px;
    height: 40px;
    margin: 7px auto 7px;
`;
