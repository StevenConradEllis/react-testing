import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../store';
import { IonIcon, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonButton, IonBackButton } from '@ionic/react'
import './BranchDetail.css';

type Props = RouteComponentProps<{ id: string, tab: string}> & ReturnType<typeof mapStateToProps> & {
  goBack: () => void;
};

const BranchDetail: React.FunctionComponent<Props> = ({ branches, match, goBack }) => {

  const branch = branches.find(s => s.id === parseInt(match.params.id, 10));
  if (!branch) {
    return null;
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton goBack={goBack} defaultHref={`/${match.params.tab}`} />
          </IonButtons>
          <IonTitle>{branch.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent padding class="branch-detail branch-page-list">
        <div>
          <img src={branch.profilePic} alt={branch.name}/>
          <br/>
          <IonButton icon-only color="twitter">
            <IonIcon name="logo-twitter"></IonIcon>
          </IonButton>
          <IonButton icon-only color="github">
            <IonIcon name="logo-github"></IonIcon>
          </IonButton>
          <IonButton icon-only color="instagram">
            <IonIcon name="logo-instagram"></IonIcon>
          </IonButton>
        </div>

        <p>{branch.about}</p>
      </IonContent>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  branches: state.branches.branches
});

export default connect(
  mapStateToProps
)(BranchDetail)
