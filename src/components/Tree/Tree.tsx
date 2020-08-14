import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

import {
  TreeProps
} from './interface';
import {
  TreeView,
  TreeContentView,
  TreeIconView,
  TreeChildrentView,
  TreeTitleView,
} from './style';
import { useMeasure } from '../../hooks/useMeasure';
import { usePrevious } from '../../hooks/usePrevious';
import { useSpring, animated } from 'react-spring';

function Tree(props: Partial<TreeProps>) {
  const {
    name,
    defaultOpen = false,
    style,
    children,
  } = props;

  const ref = React.useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const { height: childrenHeight } = useMeasure(ref);
  const previous = usePrevious(isOpen);

  const { opacity, height } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? childrenHeight : 0, opacity: isOpen ? 1 : 0 },
  }) as { height: number; opacity: number; };

  return (
    <TreeView>
      <TreeContentView style={style} onClick={() => setIsOpen(!isOpen)}>
        <TreeIconView>
          {(isOpen ? <AiOutlineMinusSquare/> : <AiOutlinePlusSquare/>)}
        </TreeIconView>
        <TreeTitleView>{name}</TreeTitleView>
      </TreeContentView>
      <TreeChildrentView style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <animated.div ref={ref}>{children}</animated.div>
      </TreeChildrentView>
    </TreeView>
  );
}

Tree.displayName = 'Tree';

Tree.defaultProps = {

};

Tree.propTypes = {

};

/** @component */
export default Tree;
