import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../../style';

const Comment = props =>
    <View>
        <View style={styles.userBox}>
          <Image
            style={styles.imgUserStyle}
            resizeMode="contain"
            source={require('../../assets/images/profile1.png')}
            />
            <Text style={styles.commentUser}> {props.user}</Text>
        </View>

        <View style={styles.commentBox}>
            <Text style={styles.commentInside}> {props.comment} </Text>
        </View>

    </View>

export default Comment;