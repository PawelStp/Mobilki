import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

export default function MainView({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

MainView.propTypes = {
  children: PropTypes.node,
};

MainView.defaultProps = {
  children: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});