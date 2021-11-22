import styled from 'styled-components';
import { useContext } from 'react';
import NewSubscriptionContext from '../../contexts/NewSubscriptionContext.js';
import { PlanBox, ImgBox, PlanDescription, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import { useHistory } from 'react-router-dom';

export default function WeeklyPlan() {
    const { setNewSubscription } = useContext(NewSubscriptionContext);
    const history = useHistory();

    function startNewSubscription() {
        setNewSubscription({
            plan: 'Mensal',
        });
        return history.push('/subscribe');
    }

    return (
        <PlanBox>
            <ImgBox>
                <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image02.jpg?raw=true' alt='Semanal' />
            </ImgBox>
            <Description>
                Você recebe um box por mês.
            </Description>
            <Description>
                Ideal para quem está começando agora.
            </Description>
            <SubscribeButton onClick={startNewSubscription}>
                Assinar
            </SubscribeButton>
        </PlanBox>
    );
}

const Description = styled(PlanDescription)`
    margin-bottom: 15px;
`;
