import { StyleSheet } from 'react-native';

export const SLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  bottom: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomgrey: {
    width: '90%',
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
  },
  bmaintext: {
    marginBottom: 15,
  },
  maintext: {
    fontSize: 20,
    fontFamily: 'jostbold',
    textAlign: 'center',
  },
  credentials: {
    marginVertical: 10,
  },
  credgroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  credicon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 5,
  },
  credinput: {
    flex: 1,
    height: 45,
    fontSize: 16, // ✅ Important: avoid iOS zoom
  },
  errortext: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
    fontFamily: 'jostmedium',
  },
  lower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  lowertext: {
    fontFamily: 'jostmedium',
    color: '#333',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  btext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'jostsemi',
  },
});
