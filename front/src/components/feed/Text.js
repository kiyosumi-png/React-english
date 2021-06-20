import styled from 'styled-components';

export default function Text(props) {
    return (
        <TextDesign>
            <ul>
                <li>{props.english}</li>
                <li>{props.japanes}</li>
            </ul>
        </TextDesign>
    );
}

const TextDesign = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }
`;
