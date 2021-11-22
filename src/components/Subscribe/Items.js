import styled from 'styled-components';
import { AiOutlineArrowDown as DownArrow } from 'react-icons/ai';

export default function Items({ opened, openBox, items, setItems }) {
    function updateItems(clickedItem) {
        if (items.some((item) => clickedItem === item)) {
            setItems(items.filter((item) => item !== clickedItem));
        } else {
            setItems([...items, clickedItem]);
        }
    }

    return (
        <Box>
            <BoxHeader opened={opened[2]} onClick={() => openBox(2)}>
                Quero receber
                {opened[2] ? null : <DownArrow style={{ fontSize: '35px' }} />}
            </BoxHeader>
           {opened[2] ? (<Options onChange={(event) => updateItems(event.target.value)}>
                <FirstRow>
                    <input type='checkbox' id='chas' name='items' value='Chás' defaultChecked={items.some((item) => item === 'Chás')} />
                    <label htmlFor='chas'>Chás</label>
                    <input type='checkbox' id='incensos' name='items' value='Incensos' defaultChecked={items.some((item) => item === 'Incensos')} />
                    <label htmlFor='incensos'>Incensos</label>
                </FirstRow>
                <SecondRow>
                    <input type='checkbox' id='produtos' name='items' value='Produtos organicos' defaultChecked={items.some((item) => item === 'Produtos organicos')} />
                    <label htmlFor='produtos'>Produtos organicos</label>
                </SecondRow>
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
