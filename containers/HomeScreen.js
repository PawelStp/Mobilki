import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';
import ListTabContent from '../components/ListTabContent';
import MainView from '../components/MainView'
import { bool } from 'prop-types';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    }
  }

  handleSearchIconPress = () => {
    this.props.navigation.navigate('Search', { favorites: this.state.favorites });
  }

  handleStartSearchCardPress = () => {
    this.props.navigation.navigate('Search');
  }

  handleDetailRequest = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
      libraryFavoritesAdded: true
    });
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetch(`https://mongpos.azurewebsites.net/api/device?deviceUniqueId=${Expo.Constants.deviceId}`)
        .then((response) => response ? response.json() : response)
        .then((json) => this.setState({ favorites: json.favourites }))
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {

    return (
      <MainView>
        <Toolbar
          centerElement={'Moja lista'}
          rightElement={'search'}
          style={{ container: { backgroundColor: COLOR.blueGrey500 } }}
          onRightElementPress={this.handleSearchIconPress}
        />
        <ListTabContent
          rows={this.state.favorites}
          handleStartSearchCardPress={this.handleStartSearchCardPress}
          onDetailRequest={this.handleDetailRequest}
        />
      </MainView>);
  }
}


const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: COLOR.grey300,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});