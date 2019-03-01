import React from 'react'
import {View} from 'react-native'

const Separator = props => <View {...props} style={[style, props.style]} />

const style = {
  height: 1,
  width: "96%",
  backgroundColor: "#CED0CE",
  marginLeft: "2%"
};

export default Separator