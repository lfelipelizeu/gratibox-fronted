import styled from 'styled-components';

const PlanBox = styled.div`
    width: 100%;
    max-width: 360px;
    height: 70vh;
    max-height: 400px;
    background-color: #e5cdb3;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto 25px;
`;

const ImgBox = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    overflow: hidden;

    & img {
        width: 100%;
    }
`;

const PlanDescription = styled.p`
    width: 90%;
    font-size: 18px;
    font-weight: 700;
    color: #4d65a8;
    line-height: 21px;
    margin: 21px auto 36px;
`;

const SubscribeButton = styled.button`
    width: 168px;
    height: 39px;
    border: none;
    border-radius: 10px;
    background-color: #8c97ea;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    display: block;
    margin: 0 auto;
`;

export {
    PlanBox,
    ImgBox,
    PlanDescription,
    SubscribeButton,
}
