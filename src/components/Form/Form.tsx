import React from 'react';

import {
  FormProps
} from './interface';
import {
  FormView,
} from './style';
import { FormContext } from './component/FormContext';
import FormLabel from './component/FormLabel';

function Form(props: FormProps) {
  const {
    className,
    style,
    children,
    colon,
    space,
    initialValues,
    onFinish,
    onFinishFailed,
    onLabelChange,
  } = props;

  return (
    <FormContext.Provider value={{}}>
      <FormView
        className={className}
        style={style}
        // onSubmit={}
      >
        {children}
      </FormView>
    </FormContext.Provider>
  );
}

Form.displayName = 'Form';

Form.defaultProps = {

};

Form.FormLabel = FormLabel;

/** @component */
export default Form;
