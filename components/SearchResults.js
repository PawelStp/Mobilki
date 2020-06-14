import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';
import { COLOR } from 'react-native-material-ui';
import MovieCard from './MovieCard'

const styles = StyleSheet.create({
  searchResults: {
    backgroundColor: COLOR.grey300,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
  },
});

export default class SearchResults extends React.Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array,
    onDetailRequest: PropTypes.func
  };

  render() {
    const { loading, results, onDetailRequest } = this.props;

    return (
      <View style={styles.searchResults}>
        {loading ?
          <View style={styles.loading}>
            <Text>Loading</Text>
          </View>
          :
          <ScrollView style={styles.scrollView}>
            {results.map(movie => (
              <MovieCard
                key={movie.Id}
                movie={movie}
                onPress={onDetailRequest}
              />
            ))}
          </ScrollView>
        }
      </View>
    )
  }
}