import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTime, Search, HelpOutline } from '@mui/icons-material';

export default function Header() {
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input placeholder='Search'/>
      </HeaderSearch>
      {/* Header right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.div`
        display: flex;
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        background-color: var(--slack-color);
        color: white;
`;
const HeaderLeft = styled.div`
        flex: 0.3;
        display: flex;
        align-items: center;
        margin-left: 20px;

        > .MuiSvgIcon-root {
                margin-left: auto;
                margin-right: 30px;
        }
`;
const HeaderAvatar = styled(Avatar)`
        cursor: pointer;
        :hover {
                opacity: 0.8;
        }
`;

const HeaderSearch = styled.div`
        flex: 0.4;
        display: flex;
        opacity: 1;
        border-radius: 6px;
        background-color: #421f44;
        text-align: center;
        color: gray
        padding: 0 50px;
        border: 1px gray solid;
        > input {
                background-color: transparent;
                border: none;
                text-align: center;
                min-width: 30vw;
                outline: none;
                color: white;
        }
`;

const HeaderRight = styled.div`
        flex: 0.3;
        display: flex;
        align-items: flex-end;
        > .MuiSvgIcon-root {
                margin-left: auto;
                margin-right: 20px;
        }
`;