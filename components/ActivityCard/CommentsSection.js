import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../../style';
import CommentForm from './CommentForm';

const CommentsSection = props =>
    <View>
        
        {props.children}

        <CommentForm />
        
    </View>

export default CommentsSection;