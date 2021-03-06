import React from 'react';

import styles from './styles.scss';

import PlayerButton from './PlayerButton';
import PlayPauseButton from './PlayPauseButton';

class PlayerControls extends React.Component {
  render() {
    return (
      <div className={styles.player_controls_container}>
        <PlayerButton onClick={this.props.back} icon="step-backward" />
        <PlayPauseButton
	        onClick={this.props.togglePlay}
	        playing={this.props.playing}
	        loading={this.props.loading}
        />
        <PlayerButton onClick={this.props.forward} icon="step-forward" />
      </div>
    );
  }
}

export default PlayerControls;
