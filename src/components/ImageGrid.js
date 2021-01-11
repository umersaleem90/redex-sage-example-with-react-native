import React, { Component } from 'react';
import { ScrollView, Image, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { loadImages } from '../actions';

class ImageGrid extends Component {
    
    componentDidMount() {
        this.props.loadImages()
    }

    render() {
        const { images, error } = this.props;
        return (
            <ScrollView style={{marginBottom: 20, marginTop: 40}}>
                {images.map((image, index) => (
                    <Image 
                        key={index} 
                        style={{height: 250, width: undefined}}
                        source={{uri: image.urls.small}}
                    />
                ))}
                {error && <Text style={{color: 'red', textAlign: 'center'}}>{JSON.stringify(error)}</Text>}
                <Button title={'Load Images'} onPress = {() => this.props.loadImages()}/>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({isLoading, images, error}) => ({
    isLoading, 
    images,
    error
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
