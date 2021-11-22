import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Plans() {
    return (
        <Box>
            <BoxHeader>
                Entrega
                <DownArrow style={{ fontSize: '35px' }} />
            </BoxHeader>
            <Options>
                        <input type='radio' id='dia1' name='day' value='1' />
                        <label for='dia1'>Dia 1</label>
                        <input type='radio' id='dia10' name='day' value='10' />
                        <label for='dia10'>Dia 10</label>
                    <div>
                        <input type='radio' id='dia20' name='day' value='20' />
                        <label for='dia20'>Dia 20</label>
                    </div>
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
        margin-right: 5px;
    }

    & label {
        margin-right: 60px;
    }

    > div {
        margin-top: 15px;
    }
`;
