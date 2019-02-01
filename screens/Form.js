import React from 'react';
import { withNavigation } from "react-navigation";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

const Form = props => (
  <Formik
    initialValues={{ name: '' }}
    onSubmit={values => console.log(values)}
  >
    {props => (
      <View>
        <TextInput
          onChangeText={props.handleChange('name')}
          onBlur={props.handleBlur('name')}
          value={props.values.name}
        />
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default withNavigation(Form)