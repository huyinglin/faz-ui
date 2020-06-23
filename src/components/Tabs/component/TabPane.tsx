import React from 'react';
import PropTypes from 'prop-types';
import { TabPaneProps } from '../interface';

function TabPane({
  children,
  active,
}: TabPaneProps) {
  return (
    <div
      role="tabpanel"
      tabIndex={active ? 0 : -1}
    >
      {active && children}
    </div>
  );
}

TabPane.displayName = 'TabPane';

TabPane.defaultProps = {

};

// TabPane.propTypes = {
//   tab: PropTypes.node,
//   children: PropTypes.node,
//   className: PropTypes.string,
//   style: PropTypes.object,
//   disabled: PropTypes.bool,
//   tabKey: PropTypes.string,
//   active: PropTypes.bool,
// };

export default React.memo(TabPane);
