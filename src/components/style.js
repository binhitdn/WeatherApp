import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});
