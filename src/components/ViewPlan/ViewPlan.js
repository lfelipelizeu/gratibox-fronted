import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContexts.js';
import { getPlan } from '../../services/gratibox.js';
import WeeklyPlan from './WeeklyPlan.js';
import MonthlyPlan from './MonthlyPlan.js';
import SubscribedPlan from './SubscribedPlan.js';
import styled from 'styled-components';

export default function ViewPlan() {
    const { user } = useContext(UserContext);
    const [planDetails, setPlanDetails] = useState();

    useEffect(() => {
        getPlan(user.token)
            .then((response) => setPlanDetails(response.data))
            .catch((error) => alert('Erro ao buscar o plano!'));
    }, [user]);

    return (
        <>
            <Container>
                <WelcomeUser>Bom te ver por aqui, {user.name.split(' ')[0]}.</WelcomeUser>
                <Quote>
                    {planDetails?.plan ? '“Agradecer é arte de atrair coisas boas”' : 'Você ainda não assinou um plano, que tal começar agora?'}
                </Quote>
                {planDetails?.plan ? <SubscribedPlan planDetails={planDetails} /> : <WeeklyPlan />}
            </Container>
            {planDetails?.plan ? null : (<Container><MonthlyPlan /></Container>)}
        </>
    )
}

const Container = styled.div`
    width: 95%;
    max-width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    //background-color: red;
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
    //margin-bottom: 30px;
    margin-bottom: 15px;
    text-align: left;
`
