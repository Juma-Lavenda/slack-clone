import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, 
        Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import SideBarOptions from './SideBarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore"
import { db } from '../firebase.mjs';



export default function SideBar() {
        const [channels] = useCollection(collection(db, 'channels'));

        return (
        <SideBarContainer>
                <SideBarHeader>
                        <SideBarInfo>
                                <h2>SLACK FAM</h2>
                                <h3>
                                        <FiberManualRecord />
                                        Lavender Juma
                                </h3>
                        </SideBarInfo>
                        <Create />
                </SideBarHeader>
                <SideBarOptions Icon = {InsertComment} title = "Threads" />
                <SideBarOptions Icon = {Inbox} title = "Mentions & Reactions" />
                <SideBarOptions Icon = {Drafts} title = "Saved Items" />
                <SideBarOptions Icon = {BookmarkBorder} title = "Channel browser" />
                <SideBarOptions Icon = {PeopleAlt} title = "People & User groups" />
                <SideBarOptions Icon = {Apps} title = "Apps" />
                <SideBarOptions Icon = {InsertComment} title = "File Browser" />
                <SideBarOptions Icon = {ExpandLess} title = "Show less" />

                <hr />
                <SideBarOptions Icon = {ExpandMore} title = "Channels" />
                <hr />

                <SideBarOptions Icon = {Add} addChannelOption title = "Add Channel" />

                {channels?.docs.map( doc => 
                        <SideBarOptions key = {doc.id} id = {doc.id} title = {doc.data().name} />

                )}
                       
        </SideBarContainer>
        );
}

const SideBarContainer = styled.div`
        background-color: var(--slack-color);
        color: white;
        flex: 0.3;
        border-top: 1px solid #49274b;
        max-width: 250px;
        margin-top: 50px;
        
=        > hr {
                margin-top: 10px;
                margin-bottom: 10px;
                border: 1px solid #49274b
        }
`;

const SideBarHeader = styled.div`
        display: flex;
        border-bottom: 1px solid #49274b;
        padding: 13px;

        > .MuiSvgIcon-root {
                padding: 8px;
                color: #49274b;
                font-size: 18px;
                background-color: white;
                border-radius: 50%;
        }
`;

const SideBarInfo = styled.div`
        flex: 1;        
        > h2 {
                font-size: 15px;
                font-weight: 900;
                margin-bottom: 5px;
        }
        
        > h3 {
                display: flex;
                font-size: 13px;
                font-weight: 400;
                align-items: center;
        }

        > h3 > .MuiSvgIcon-root {
                font-size: 14px;
                margin-top: 1px;
                margin-right: 2px;
                color: green;
        }
`;