import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NavBar = ({
  title,
  leftContentView,
  centerContentView,
  rightContentView,
  hideBackButton = false,
}) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.leftContainer}>
        {!hideBackButton && leftContentView}
      </View>

      {title ? (
        <View style={styles.titleContainer} accessible={false}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      ) : (
        centerContentView && (
          <View style={styles.middleContainer}>{centerContentView}</View>
        )
      )}
      <View style={styles.rightContainer}>{rightContentView}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  leftContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  rightContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '400',
  },
});

export default NavBar;
