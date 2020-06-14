import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainView from '../components/MainView';
import DetailsHeader from './../components/DetailsHeader'
import DetailsPlot from './../components/DetailsPlot'
import FitImage from 'react-native-fit-image';
import { Toolbar, COLOR } from 'react-native-material-ui';

const styles = StyleSheet.create({
  moviePoster: {

  },

  result: {
  },
});

export default class DetailsScreen extends React.Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      libraryFavoritesAdded: this.props.route.params.libraryFavoritesAdded,
    }
  }

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  handleFavoriteIcon = () => {
    if (!this.state.libraryFavoritesAdded) {
      fetch(`https://mongpos.azurewebsites.net/api/Device/add-favorite?deviceUniqueId=${Expo.Constants.deviceId}&movieId=${this.props.route.params.movie.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: null
      }).then(() => this.setState({ libraryFavoritesAdded: true }));
    } else {
      fetch(`https://mongpos.azurewebsites.net/api/Device/remove-favorite?deviceUniqueId=${Expo.Constants.deviceId}&movieId=${this.props.route.params.movie.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: null
      }).then(() => this.setState({ libraryFavoritesAdded: false }));;
    }
  }

  render() {
    const {
      movie
    } = this.props.route.params;

    return (
      <MainView>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          style={{ container: { backgroundColor: COLOR.blueGrey500 } }}
          centerElement="Szczegóły"
          rightElement={this.state.libraryFavoritesAdded ? 'favorite' : 'favorite-border'}
          onRightElementPress={this.handleFavoriteIcon}
        />
        <ScrollView>
          <FitImage
            style={styles.moviePoster}
            source={{ uri: movie.imagePath }}
          />
          <View style={styles.result}>
            <DetailsHeader result={movie} />
            <DetailsPlot result={movie} />
          </View>
        </ScrollView>
      </MainView>
    );
  }
}