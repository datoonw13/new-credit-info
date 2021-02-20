import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {socialLinksListItems} from './config';

const SocialLinks = () => (
  <View style={styles.container}>
    {socialLinksListItems.map(({id, backgroundColor, Icon}) => (
      <TouchableOpacity
        style={[styles.socialLinks, {backgroundColor}]}
        key={id}>
        <Icon />
      </TouchableOpacity>
    ))}
  </View>
);

export default SocialLinks;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLinks: {
    width: 38,
    height: 38,
    marginHorizontal: 18,
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
