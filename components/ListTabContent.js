import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import TabContent from './TabContent'
import SearchCard from '../containers/SearchCard'

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
  }

  handleStartSearchCardPress = () => {
    this.props.navigation.navigate('Search');
  }

  render() {
    const { rows } = this.props;

    return (
      <TabContent>
        {
          rows.length === 0
            ?
            <View style={styles.startSearchContainer}>
              <SearchCard
                onPress={this.handleStartSearchCardPress}
              />
            </View>
            :
            <ScrollView>

            </ScrollView>
        }
      </TabContent>
    )
  }
}