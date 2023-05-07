import styled from 'styled-components';
import React, { useRef } from 'react';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import {  useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { doc, query, collection, orderBy} from 'firebase/firestore';
import { db } from '../firebase.mjs';
import Message from './Message';

export default function Chat() {
        const chatRef = useRef(null);
        const roomId = useSelector(selectRoomId);
        const [roomDetails] = useDocument(
                roomId && doc(db, 'channels', roomId)
        )
        const [roomMessage] = useCollection(
                roomId && query(
                        collection(db, 'channels', roomId, 'messages'),
                        orderBy('timestamp', 'asc')
                      )
        )
        return (
        <ChatContainer>
                <>
        <Header>
                <HeaderLeft>
                        <h4><strong>#{roomDetails?.data().name}</strong></h4>
                        <StarBorderOutlined />
                        
                </HeaderLeft>
                <HeaderRight>
                        <p>
                                <InfoOutlined /> Details
                        </p>
                </HeaderRight>
        </Header>
        </>
        <ChatMessages>
                {roomMessage?.docs.map(doc =>                         
                        <Message 
                        key = {doc.data().id}
                        user = {doc.data().user}
                        message = {doc.data().message}
                        timestamp = {doc.data().timestamp}
                        userImage = {doc.data().userImage}
                         />
                        
                )}
        </ChatMessages>
        <ChatBottom ref = {chatRef}/>
        <ChatInput key = {roomId} channelId = {roomId} channelName = {roomDetails?.data().name } />
        </ChatContainer>
        );
}
const ChatBottom = styled.div`
        padding-bottom: 200px;
`;
const ChatContainer = styled.div`
        flex: 0.7;
        flex-grow: 1;
        overflow-y: scroll;
        margin-top: 60px;
`;
const Header = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
        display: flex;
        align-items: center;
        > h4 {
                display: flex;
                text-transform: lowercase;
                margin-right: 10px;
        }
        > h4 > .MuiSvgIcon-root {
                margin-left: 10px;
                font-size: 18px;
        }
`;
const HeaderRight = styled.div`
        > p {
                display: flex;
                align-items: center;
                font-size: 14px;
        }
        > p > .MuiSvgIcon-root {
                margin-right: 5px !important;
                font-size: 16px;
        }
`;

const ChatMessages = styled.div`

`;