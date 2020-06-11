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

  handleBackIconPress = () => {
    this.props.navigation.goBack();
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
          centerElement="Movie Details"
          rightElement={'favorite'}
        />
        <ScrollView>
          <FitImage
            style={styles.moviePoster}
            source={{ uri: movie.Poster }}
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