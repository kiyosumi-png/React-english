import styled from 'styled-components';

function Icon({ Icon }) {
    return (
        <IconDesign>
            <Icon />
        </IconDesign>
    );
}

export default Icon;

const IconDesign = styled.div`
    border-radius: 30%;
`;
