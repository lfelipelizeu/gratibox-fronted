import { PlanBox, ImgBox, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function SubscribedPlan({ planDetails }) {
    const { plan, subscriptionDate, nextDeliveries, items } = planDetails;

    function dateFormat(date) {
        return dayjs(date).format('DD/MM/YY');
    }

    return (
        <>
            <Box>
                <NewImgBox>
                    <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true' alt='Plano' />
                </NewImgBox>
                <PlanDetails>
                    <Detail>
                        Plano: <span>{plan}</span>
                    </Detail>
                    <Detail>
                        Data da assinatura: <span>{dateFormat(subscriptionDate)}</span>
                    </Detail>
                    <Detail>
                        Próximas entregas:
                        <DeliveriesDates>
                            {nextDeliveries.map((delivery) => <li>{dateFormat(delivery)}</li>)}
                        </DeliveriesDates>
                    </Detail>
                </PlanDetails>
                <DeliveryItems>
                    {items.map((item) => <li>{item}</li>)}
                </DeliveryItems>
            </Box>
            <RateButton onClick={() => alert('Disponível em breve!')}>
                Avaliar entregas
            </RateButton>
        </>
    );
}

const Box = styled(PlanBox)`
    height: 60vh;
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
    margin-bottom: 0px;
`;

const NewImgBox = styled(ImgBox)`
    height: 45%;
`;

const PlanDetails = styled.ul`
    width: 90%;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    margin: 5% auto 0;
`;

const Detail = styled.li`
    color: #4d65a8;

    & span {
        color: #e95590;
    }
`;

const DeliveriesDates = styled.ul`
    & li {
        color: #e95590;
        margin-left: 40px;
    }
`;

const DeliveryItems = styled.ul`
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: #e95590;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 10px;
    left: 0;
`;

const RateButton = styled(SubscribeButton)`
    width: 237px;
    height: 56px;
    margin: 20px auto;
`;
