import { PlanBox, ImgBox, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import styled from 'styled-components';

export default function SubscribedPlan() {
    return (
        <>
            <Box>
                <NewImgBox>
                    <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true' alt='Plano' />
                </NewImgBox>
                <PlanDetails>
                    <Detail>
                        Plano: <span>@tipo_de_plano</span>
                    </Detail>
                    <Detail>
                        Data da assinatura: <span>dd/mm/aa</span>
                    </Detail>
                    <Detail>
                        Próximas entregas:
                        <DeliveriesDates>
                            <li>dd/mm/aa</li>
                            <li>dd/mm/aa</li>
                            <li>dd/mm/aa</li>
                        </DeliveriesDates>
                    </Detail>
                </PlanDetails>
                <DeliveryItems>
                    <li>Chás</li>
                    <li>Produtos organicos</li>
                    <li>Incensos</li>
                </DeliveryItems>
            </Box>
            <RateButton>
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
