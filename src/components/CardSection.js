// import all libraries
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

// create a component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff', 
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        borderColor: '#ddd', 
        position: 'relative'
    }
};


// make the commponent available to others
export default CardSection;
