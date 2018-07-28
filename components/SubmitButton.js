import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';

const SubmitButton = props =>
<TouchableOpacity
style={styles.submitButton}
 {...props}>
<Text style={styles.submitButtonText}> Submit </Text>
</TouchableOpacity>
export default SubmitButton;