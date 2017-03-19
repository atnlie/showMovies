import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../action/movies'
import MoviesList from '../component/MoviesList'
import { bindActionCreators } from 'redux'

 class MoviesContainer extends Component {
    componentWillMount(){
        this.props.loadMovies()
    }

    render() {
        const { movies } = this.props;
        return (
            <View>
            {
                movies.error ? <View>{movies.error.toString()}</View> : <MoviesList navigator={this.props.navigator} movies={movies.data}/>
            }
            </View>
        );
    }
}

const mapStateToProps = (store) => {
    return  {
        movies: store.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return { loadMovies: bindActionCreators(actions.loadMovies, dispatch) };
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesContainer);