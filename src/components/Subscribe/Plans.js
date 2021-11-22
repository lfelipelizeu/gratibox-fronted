import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Plans() {
    return (
        <Box>
            <BoxHeader>
                Plano
                <DownArrow style={{ fontSize: '35px' }} />
            </BoxHeader>
            <Options>
                    <input type='radio' id='semanal' name='plan' value='Semanal' />
                    <label for='semanal'>Semanal</label>
                    <input type='radio' id='mensal' name='plan' value='Mensal' />
                    <label for='mensal'>Mensal</label>
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
    padding: 7px 12px 15px;

    & input {
        margin-right: 5px;
    }

    & label {
        margin-right: 40px;
    }
`;
