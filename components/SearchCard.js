import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { COLOR, Card, Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
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

  iconContainer: {
    marginRight: 20,
  },

  text: {
    fontSize: 20,
    color: COLOR.grey700,
  },
});

const TextView = ({ children }) => (
  <View>
    <Text style={styles.text}>{children}</Text>
  </View>
);
TextView.propTypes = {
  children: PropTypes.string.isRequired,
};


export default class SearchCard extends React.Component {
  static propTypes = {
    onPress: PropTypes.func
  }
  render() {
    const { onPress } = this.props;
    return (
      <Card
        style={{ container: styles.container }}
        onPress={onPress}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Icon
              name="search"
              size={40}
              color={COLOR.grey700}
            />
          </View>
          <View>
            <TextView>Nic tu nie ma...</TextView>
            <TextView>Kliknij by zacząć szukać!</TextView>
          </View>
        </View>
      </Card>
    );
  }
}