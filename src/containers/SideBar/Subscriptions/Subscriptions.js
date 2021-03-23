import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='Madan Gowri' broadcasting/>
        <Subscription label='LMES' amountNewVideos={2}/>
        <Subscription label='Sha Boo Three' amountNewVideos={1}/>
        <Subscription label='PuthiyathalaiMuraiTV' amountNewVideos={22}/>
        <Subscription label='Behindwoods' amountNewVideos={11}/>
        <Divider/>
      </React.Fragment>
    );
  }
}