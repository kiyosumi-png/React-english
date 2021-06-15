import React, { useState } from 'react';
import { Button, Icon, Input } from '../index';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

function AddButton() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <div>
            <MenuIconContainer onClick={() => setBurgerStatus(true)}>
                <Icon Icon={CreateIcon} />
            </MenuIconContainer>
            <AddBurger status={burgerStatus}>
                <CloseContainer>
                    <Close onClick={() => setBurgerStatus(false)} />
                </CloseContainer>
                <Button text="付ける" />
                <Input holder="please write English" />
                <Input holder="日本語訳を書いて下さい" />
            </AddBurger>
        </div>
    );
}

export default AddButton;

const Close = styled(CloseIcon)`
    cursor: pointer;
`;

const MenuIconContainer = styled.div``;

const CloseContainer = styled.div``;

const AddBurger = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${(props) =>
        props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`;
