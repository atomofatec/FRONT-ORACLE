import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginLeft: 200,
    marginBottom: 2,
     
    },
    
  indicator: {
    width: 13,
    height: 13,
    borderRadius: 10,
    marginRight: 10,
  },
  active: {
    backgroundColor: '#C74634',
  },
  inactive: {
    backgroundColor: '#C74634',
  },

  title: {
    fontSize: 14,
    color: "#C74634",
    paddingVertical: 8,
    paddingHorizontal: 26,
    paddingLeft: 170,
  },
  
});

export default styles;
