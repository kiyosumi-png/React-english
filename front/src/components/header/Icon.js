import styled from 'styled-components';

export default function Icon({ Icon }) {
    return (
        <IconDesign>
            <Icon />
        </IconDesign>
    );
}

const IconDesign = styled.div`
    cursor: pointer;
`;
