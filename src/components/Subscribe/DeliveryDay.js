import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Plans({ opened, openBox, deliveryDay, setDeliveryDay }) {
    return (
        <Box>
            <BoxHeader opened={opened[1]} onClick={() => openBox(1)}>
                Entrega
                {opened[1] ? null : <DownArrow style={{ fontSize: '35px' }} />}
            </BoxHeader>
            {opened[1] ? (<Options>
                        <input type='radio' id='dia1' name='day' value='1' />
                        <label for='dia1'>Dia 1</label>
                        <input type='radio' id='dia10' name='day' value='10' />
                        <label for='dia10'>Dia 10</label>
                    <div>
                        <input type='radio' id='dia20' name='day' value='20' />
                        <label for='dia20'>Dia 20</label>
                    </div>
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
    margin: 0 auto 7px;
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
