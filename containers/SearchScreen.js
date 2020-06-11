import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';
import SearchResults from './SearchResults'
import MainView from './MainView';

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
    this.setState({ results: [{ Id: 1, Plot: 'Test', Genre: 'Sci-fi', Runtime: "150 min", Year: 2020, Title: 'Harry Potter', Poster: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/6b/HP5a.jpg/revision/latest/top-crop/width/360/height/450?cb=20110716094537&path-prefix=pl' }, { Id: 2, Year: 2020, Title: 'title2', Poster: 'https://bajecznepokoje.pl/wp-content/uploads/2017/07/w3-51-510x510.jpg' }] });
    this.setState({ loading: false });
  }

  handleDetailRequest = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
    });
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