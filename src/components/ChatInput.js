import { Button } from '@mui/material';
import { collection, doc, addDoc , Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase.mjs';

export default function ChatInput({channelName, channelId}) {
        const [input, setInput] = useState("");
        const sendMessage = e => {
                e.preventDefault();
                if (!channelId) {
                        return false;
                }
                // Reference to the document in "collection1" with ID "doc1"
                const parentDocRef = doc(db, 'channels', channelId);

                // Reference to the "subcollection" inside the "doc1" document
                const subcollectionRef = collection(parentDocRef, 'messages');

                // Add a new document to the "subcollection"
                addDoc(subcollectionRef, { 
                        message: input,
                        timestamp: Timestamp.now(),
                        user: 'Lavender Juma',
                        userImage: 'https://tse4.mm.bing.net/th?id=OIP.XH_zxKkXhDvH5OBvbcLs1AHaE8&pid=Api&P=0'
                });
                setInput('');
               
       }
        return (
        <ChatInputContainer>
        <form >
                <input value = {input} 
                onChange = {e => setInput(e.target.value)}
                placeholder = {`Message #${channelName}` }/>
                <Button hidden type = 'submit' onClick={sendMessage}>
                        SEND
                </Button>
        </form>
        </ChatInputContainer>
        );
}
const ChatInputContainer = styled.div`
        border-radius: 20px;
        > form {
                position: relative;
                display: flex;
                justify-content: center;
        }
        > form > input {
                position: fixed;
                bottom: 30px;
                width: 60%;
                border: 1px solid gray;
                border-radius: 3px;
                padding: 20px;
                outline: none;
        }

        > form > button {
                display: none !important
        }
`;