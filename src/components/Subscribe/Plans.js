import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Plans({ opened, openBox, planOption, setPlanOption }) {
    return (
        <Box>
            <BoxHeader opened={opened[0]} onClick={() => openBox(0)}>
                Plano
                {opened[0] ? null : <DownArrow style={{ fontSize: '35px' }} />}
            </BoxHeader>
            {opened[0] ?( <Options onChange={(event) => setPlanOption(event.target.value)}>
                    <input type='radio' id='semanal' name='plan' value='weekly' defaultChecked={planOption === 'weekly'} />
                    <label htmlFor='semanal'>Semanal</label>
                    <input type='radio' id='mensal' name='plan' value='monthly' defaultChecked={planOption === 'monthly'} />
                    <label htmlFor='mensal'>Mensal</label>
            </Options>) : null}
        </Box>
    );
}

const Box = styled.div`
    width: 90%;
    min-height: 10%;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px 5px ${({ opened }) => opened ? '0 0' : '5px 5px'};
    font-size: 18px;
    color: #4d65a8;
    margin: 20px auto 7px;
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
    border-radius: 0 0 5px 5px;
    padding: 7px 12px 15px;

    & input {
        margin-right: 5px;
    }

    & label {
        margin-right: 40px;
    }
`;
