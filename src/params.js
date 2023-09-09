import {Dimensions} from 'react-native';

const params = {
  blockSize: 30,
  bordersize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  dificultLevel: 0.1,
  getColumnsAmout() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRownAmout() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
