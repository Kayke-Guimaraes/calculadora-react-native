import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    scrollView: {
      flexGrow: 1,
      marginTop: 30,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    settingsButton: { 
      position: 'absolute', 
      top: 10, 
      left: 10,
      zIndex: 1,
    }, 
    settingsButtonText: { 
      fontSize: 24, 
    },
});

export default styles;