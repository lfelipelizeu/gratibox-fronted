import { PlanBox, ImgBox, PlanDescription, SubscribeButton } from '../../styles/ViewPlanStyles.js';

export default function WeeklyPlan() {
    return (
        <PlanBox>
            <ImgBox>
                <img src='https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image04.jpg?raw=true' alt='Mensal' />
            </ImgBox>
            <PlanDescription>
                Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
            </PlanDescription>
            <SubscribeButton>
                Assinar
            </SubscribeButton>
        </PlanBox>
    );
}
