import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainView from './MainView';
import DetailsHeader from './../components/DetailsHeader'
import DetailsPlot from './../components/DetailsPlot'
import FitImage from 'react-native-fit-image';

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

    render() {
        const {
            movie
        } = this.props.route.params;

        return (
            <MainView>
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