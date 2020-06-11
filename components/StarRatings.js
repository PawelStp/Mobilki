import React from 'react';
import StarRating from 'react-native-star-rating';

export default class StarRatings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
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