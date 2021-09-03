import { useContext } from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';

import Icon from '../Icon';
import { FlagContext } from '../../../context/FlagContext';

export default function CreateButton() {
    const { setFlag } = useContext(FlagContext);

    return (
        <div>
            <MenuIconContainer onClick={() => setFlag(true)}>
                <Icon Icon={CreateIcon} />
            </MenuIconContainer>
        </div>
    );
}

const MenuIconContainer = styled.div``;
