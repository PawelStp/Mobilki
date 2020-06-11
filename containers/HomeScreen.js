import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';
import ListTabContent from '../components/ListTabContent';
import MainView from '../components/MainView'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
    }
  }

  handleSearchIconPress = () => {
    this.props.navigation.navigate('Search');
  }

  render() {

    return (
      <MainView>
        <Toolbar
          centerElement={'Movies'}
          rightElement={'search'}
          style={{ container: { backgroundColor: COLOR.blueGrey500 } }}
          onRightElementPress={this.handleSearchIconPress}
        />
        <ListTabContent rows={this.state.rows} navigation={this.props.navigation} />
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