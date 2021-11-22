import { useContext } from 'react';
import NewSubscriptionContext from '../../contexts/NewSubscriptionContext.js';
import { PlanBox, ImgBox, PlanDescription, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import { useHistory } from 'react-router-dom';

export default function WeeklyPlan() {
    const { setNewSubscription } = useContext(NewSubscriptionContext);
    const history = useHistory();

    function startNewSubscription() {
        setNewSubscription({
            plan: 'Semanal',
        });
        return history.push('/subscribe');
    }

    return (
        <PlanBox>
            <ImgBox>
                <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image04.jpg?raw=true' alt='Mensal' />
            </ImgBox>
            <PlanDescription>
                Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
            </PlanDescription>
            <SubscribeButton onClick={startNewSubscription}>
                Assinar
            </SubscribeButton>
        </PlanBox>
    );
}
