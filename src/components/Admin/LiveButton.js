import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const LiveButton = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate starting and stopping the live status
    const interval = setInterval(() => {
      setIsLive((prevState) => !prevState);
    }, 1000); // Toggle every second, change this interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.dot, isLive ? styles.liveDot : null]} />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginRight: 5,
    marginTop:100
  },
  liveDot: {
    backgroundColor: 'red', // Change to your preferred color for the live indicator
  },
});

export default LiveButton;
