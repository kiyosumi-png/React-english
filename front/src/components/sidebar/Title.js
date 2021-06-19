import styled from 'styled-components';

function Title({ text }) {
    return <TitleDesign>{text}</TitleDesign>;
}

export default Title;

const TitleDesign = styled.div`
    background-color: #c7f2e6;
    padding: 20px 60px;
    font-size: 25px;
    font-weight: 600;
    margin: 8px;
    cursor: pointer;
    text-align: center;
`;
