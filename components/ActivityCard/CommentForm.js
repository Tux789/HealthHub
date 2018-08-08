import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import apiUrl from "../../apiRoutes";
import FormInput from '../../components/FormInput';
import SubmitButton from "../../components/SubmitButton";
import styles from '../../style';

class CommentForm extends Component {

    state = {
        comment: "",
    }

    handleComment = (text) => {
        this.setState({ comment: text })
    }


    addComment = (comment) => {
        fetch(`${apiUrl}/api/activities`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: comment,
            })
        })
            .then((results) => console.log(results));
    };

    render() {
        return (<ScrollView>
            <View style={styles.container}>

                <FormInput name="Comment" onChangeText={this.handleComment} />

                <SubmitButton onPress={() => this.addComment(this.state.comment)} />

            </View>
        </ScrollView>)
    }
}

export default CommentForm;