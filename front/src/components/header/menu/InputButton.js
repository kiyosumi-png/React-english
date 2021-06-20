import React, { useContext } from 'react';
import { Icon } from '../index';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import { FlagContext } from '../../../context/FlagContext';

export default function InputButton() {
    const { setAddStatus } = useContext(FlagContext);

    return (
        <div>
            <MenuIconContainer onClick={() => setAddStatus(true)}>
                <Icon Icon={CreateIcon} />
            </MenuIconContainer>
        </div>
    );
}

const MenuIconContainer = styled.div``;
