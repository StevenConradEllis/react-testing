import React, { Component } from 'react';
import { IonIcon, IonTabs, IonTab, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';

export default class Tabs extends Component {
  render() {
    return (
      <IonTabs>
        <IonTab tab="fishes">Fish Content</IonTab>
        <IonTab tab="branches">Branches Content</IonTab>
        <IonTab tab="map">Map Content</IonTab>
        <IonTab tab="about">About Content</IonTab>

        <IonTabBar slot="bottom">
          <IonTabButton tab="fishes">
            <IonLabel>Fishes</IonLabel>
            <IonIcon name="fishes"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="branches">
            <IonLabel>Branches</IonLabel>
            <IonIcon name="branches"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonLabel>Map</IonLabel>
            <IonIcon name="map"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="about">
            <IonLabel>About</IonLabel>
            <IonIcon name="about"></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  }
}
