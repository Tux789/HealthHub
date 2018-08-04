import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../../style';

const CommentsSection = props =>
    <View>
        {props.children}
    </View>

export default CommentsSection;