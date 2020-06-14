import React from 'react';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';
import { Alert } from "react-native";

export default class StarRatings extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.movie.rateAverage,
      voted: false
    };
  }

  onStarRatingPress(rating) {
    if (!this.state.voted) {
      fetch(`https://mongpos.azurewebsites.net/api/Rate`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deviceId: Expo.Constants.deviceId,
          movieId: this.props.movie.id,
          value: rating
        })
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ starCount: json.value })
          this.showAlert("Twój głos został zapisany.")
          this.setState({ voted: true });
        });
    } else {
      this.showAlert("Oddałeś już głos na ten film.")
    }
  };

  componentDidMount() {
    console.log(Expo.Constants.deviceId);
    console.log(this.props.movie.id);
    fetch(`https://mongpos.azurewebsites.net/api/Rate?uniqueDeviceId=${Expo.Constants.deviceId}&movieId=${this.props.movie.id}`)
      .then((response) => response ? response.json() : null)
      .then((json) => {
        if (json) {
          this.setState({ voted: true });
        }
      })
  }

  showAlert(message) {
    Alert.alert(
      "",
      message,
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  }

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