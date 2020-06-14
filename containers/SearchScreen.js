import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';
import SearchResults from '../components/SearchResults'
import MainView from '../components/MainView';

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
  },
});

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      results: []
    }
  }

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  handleSearchTermChange = (term) => {
    this.setState({ searchTerm: term });
  }

  handleClearIconPress = () => {
    this.handleSearchTermChange('');
  }

  handleSearchSubmit = () => {
    this.setState({ loading: true });
    this.getMovies();
    this.setState({ loading: false });
  }

  handleDetailRequest = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
      libraryFavoritesAdded: this.props.route.params.favorites.find(m => m.id === movie.id)
    });
  }

  getMovies = () => {
    fetch(`https://mongpos.azurewebsites.net/api/movie?query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((json) => this.setState({ results: json }))
  }

  render() {

    return (
      <MainView >
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          style={{ container: { backgroundColor: COLOR.blueGrey500 } }}
          centerElement={(
            <TextInput
              autoFocus
              value={this.state.searchTerm}
              onChangeText={this.handleSearchTermChange}
              onSubmitEditing={this.handleSearchSubmit}
              placeholder="Search movies..."
              underlineColorAndroid="transparent"
              style={
                styles.titleText
              }
            />
          )}
          rightElement={this.state.searchTerm.length > 0 ? 'close' : undefined}
          onRightElementPress={this.handleClearIconPress}
        />
        <View styles={styles.content}>
          <SearchResults
            loading={this.state.loading}
            results={this.state.results}
            onDetailRequest={this.handleDetailRequest}
          />
        </View>
      </MainView>);
  }
}