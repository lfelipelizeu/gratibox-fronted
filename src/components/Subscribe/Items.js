import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Plans() {
    return (
        <Box>
            <BoxHeader>
                Quero receber
                <DownArrow style={{ fontSize: '35px' }} />
            </BoxHeader>
            <Options>
                <FirstRow>
                    <input type='checkbox' id='chas' name='items' value='Chás' />
                    <label for='chas'>Chás</label>
                    <input type='checkbox' id='incensos' name='items' value='Incensos' />
                    <label for='incensos'>Incensos</label>
                </FirstRow>
                <SecondRow>
                    <input type='checkbox' id='produtos' name='items' value='Produtos organicos' />
                    <label for='produtos'>Produtos organicos</label>
                </SecondRow>
            </Options>
        </Box>
    );
}

const Box = styled.div`
    width: 90%;
    height: 45px;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px 5px 0 0;
    font-size: 18px;
    color: #4d65a8;
    margin: 33px auto 7px;
`;

const BoxHeader = styled.div`
    width: 100%;
    height: 45px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 12px;
`;

const Options = styled.div`
    width: 100%;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 0 0 5px 5px;
    margin-bottom: 7px;
    padding: 7px 12px 15px;

    & input {
        width: 25px;
        height: 25px;
    }
`;

const FirstRow = styled.div`
    display: grid;
    grid-template-columns: 35px 40% 35px 40%;
    align-items: center;
    margin-bottom: 12px;
`;

const SecondRow = styled.div`
    display: flex;
    align-items: center;

    & input {
        margin-right: 6px;
    }
`;
