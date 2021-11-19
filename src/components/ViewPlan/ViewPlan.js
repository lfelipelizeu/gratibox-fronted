import styled from 'styled-components';

export default function ViewPlan() {
    return (
        <Container>
            <WelcomeUser>Bom te ver por aqui, @User.</WelcomeUser>
            <Quote>Você ainda não assinou um plano, que tal começar agora?</Quote>
        </Container>
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
`;

const WelcomeUser = styled.h1`
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    margin: 100px 0 22px;
`;

const Quote = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    margin-bottom: 30px;
    text-align: left;
`
