import React from 'react';
import PropTypes from 'prop-types';
import {
  IconProps
} from './interface';
import {

} from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function Icon(props: IconProps) {
  const {

  } = props;

  return (
    <div>
      <FontAwesomeIcon icon="arrow-down" />
    </div>
  );
}

Icon.displayName = 'Icon';

Icon.defaultProps = {

};

Icon.propTypes = {

};

/** @component */
export default Icon;
