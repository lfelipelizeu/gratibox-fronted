import { PlanBox, ImgBox, PlanDescription, SubscribeButton } from '../../styles/ViewPlanStyles.js';
import { useHistory } from 'react-router-dom';

export default function WeeklyPlan() {
    const history = useHistory();

    return (
        <PlanBox>
            <ImgBox>
                <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image04.jpg?raw=true' alt='Mensal' />
            </ImgBox>
            <PlanDescription>
                Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
            </PlanDescription>
            <SubscribeButton onClick={() => history.push('/subscribe/weekly')}>
                Assinar
            </SubscribeButton>
        </PlanBox>
    );
}
