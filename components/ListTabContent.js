import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import TabContent from './TabContent'
import SearchCard from './SearchCard'
import MovieCard from './MovieCard'

const styles = StyleSheet.create({
  startSearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  movieCard: {
    marginBottom: 0,
    marginTop: 0,
  },

  fillView: {
    flex: 1,
  },
});

export default class ListTabContent extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.array),
    rowLength: PropTypes.number,
    handleStartSearchCardPress: PropTypes.func,
    onDetailRequest: PropTypes.func
  }

  render() {
    const { rows, handleStartSearchCardPress, onDetailRequest } = this.props;

    return (
      <TabContent>
        {
          rows.length === 0
            ?
            <View style={styles.startSearchContainer}>
              <SearchCard
                onPress={handleStartSearchCardPress}
              />
            </View>
            :
            <ScrollView>
            {rows.map(movie => (
              <MovieCard
                key={movie.Id}
                movie={movie}
                onPress={onDetailRequest}
              />
            ))}
            </ScrollView>
        }
      </TabContent>
    )
  }
}