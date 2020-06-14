import React from 'react';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';

export default class StarRatings extends React.Component {
    static propTypes = {
        movie: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            starCount: this.props.movie.rateAverage
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    };

    render() {
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={"white"}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
        );
    }
}