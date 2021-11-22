import { useState, useEffect } from 'react';
import { getStates } from '../../services/gratibox.js';
import styled from 'styled-components';

export default function States({ setState }) {
    const [states, setStates] = useState([]);

    useEffect(() => {
        getStates()
            .then((response) => setStates(response.data))
            .catch((error) => alert('Erro ao buscar os estados!'));
    }, []);

    return (
        <Box onChange={(event) => setState(Number(event.target.value))}>
            <option defaultValue hidden>Estado</option>
            {states.map((state, index) => <option key={index} value={state.id}>{(state.uf)}</option>)}
        </Box>
    );
}

const Box = styled.select`
    width: 40%;
    background-color: rgba(224, 209, 237, 0.62);
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #4d65a8;
    padding-left: 12px;
`;
