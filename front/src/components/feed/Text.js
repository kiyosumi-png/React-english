import styled from 'styled-components';

export default function Text(props) {
    return (
        <TextDesign>
            <ul>
                <li>{props.english}</li>
                <li>{props.japanese}</li>
            </ul>
        </TextDesign>
    );
}

const TextDesign = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0 150px;

        li {
            font-size: 25px;
            font-weight: 400;
        }
    }
`;
