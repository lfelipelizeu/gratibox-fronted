import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContexts.js';
import NewSubscriptionContext from '../../contexts/NewSubscriptionContext.js';
import { useHistory } from 'react-router-dom';
import { PlanBox, ImgBox, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import Plans from './Plans.js';
import DeliveryDay from './DeliveryDay.js';
import Items from './Items.js';
import styled from 'styled-components';

export default function Subscribe() {
    const { plan } = useParams();
    const { user } = useContext(UserContext);
    const { setNewSubscription } = useContext(NewSubscriptionContext);
    const [opened, setOpened] = useState([false, true, false]);
    const [planOption, setPlanOption] = useState(plan === 'weekly' ? 'Semanal' : 'Mensal');
    const [deliveryDay, setDeliveryDay] = useState();
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            alert('Você não está logado!');
            return history.push('/home');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function openBox(index) {
        const changeOpened = [false, false, false];
        changeOpened[index] = true;
        setOpened(changeOpened);
    }

    function createSubscriptionObject() {
        if (!deliveryDay) {
            alert('Escolha o dia para a entrega!');
            return openBox(1);
        }
        if (items.length === 0) {
            alert('Escolha pelo menos 1 item para ser entregue!');
            return openBox(2);
        }

        const subscription = {
            planOption,
            deliveryDay,
            items,
        };

        setNewSubscription(subscription);
        console.log(subscription);

        //return history.push('/shipping');
    }

    return (
        <Container>
            <WelcomeUser>Bom te ver por aqui, {user?.name.split(' ')[0]}.</WelcomeUser>
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
                    setDeliveryDay={setDeliveryDay}
                />
                <DeliveryDay
                    opened={opened}
                    openBox={openBox}
                    planOption={planOption}
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
            <NextButton onClick={createSubscriptionObject}>
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
