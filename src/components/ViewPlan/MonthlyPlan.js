import styled from 'styled-components';
import { PlanBox, ImgBox, PlanDescription, SubscribeButton } from '../../styles/ViewPlanStyles.js';

export default function WeeklyPlan() {
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
            <SubscribeButton>
                Assinar
            </SubscribeButton>
        </PlanBox>
    );
}

const Description = styled(PlanDescription)`
    margin-bottom: 15px;
`;
