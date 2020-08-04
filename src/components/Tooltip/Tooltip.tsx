import React from 'react';
import PropTypes from 'prop-types';

import {
  TooltipProps
} from './interface';
import {
  TooltipView,
  TooltipContentView,
  TooltipArrowView,
} from './style';
import { useCopyRef } from '../../hooks/useCopyRef';
import { useMeasure } from '../../hooks/useMeasure';
import { usePortal } from '../../hooks/usePortal';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useSpring } from 'react-spring'
import { useMergedState } from '../../hooks/useMergedState';
import * as ease from 'd3-ease';

function Tooltip(props: Partial<TooltipProps>) {
  const {
    children,
    title,
    arrow = true,
    color = 'rgba(0, 0, 0, 0.75)',
    defaultVisible = false,
    container,
    placement,
    trigger = 'hover',
    enterDelay = 100,
    leaveDelay = 100,
    className,
    style,
    onChange,
  } = props;

  const triggerList: string[] = React.useMemo(() => typeof trigger === 'string' ? [trigger] : trigger, [trigger]);
  const validChildRef = React.useRef<HTMLSpanElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const enterTimer = React.useRef<number>();
  const leaveTimer = React.useRef<number>();

  const contentRect = useMeasure(contentRef);

  let hystersisOpen = false;
  let hystersisTimer: number;

  const { Portal } = usePortal(container);

  const [rect, setRect] = React.useState({ top: 0, left: 0, height: 0, width: 0});
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);

  const [visible, setVisible] = useMergedState<boolean>(defaultVisible, {
    value: props.visible,
  });

  const child: React.ReactElement = React.isValidElement(children) ? children : <span>{children}</span>;

  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
  } = child.props;

  React.useEffect(() => {
    const rect = validChildRef.current?.getBoundingClientRect();
    if (rect) {
      setTop(window.scrollY + rect.top - contentRect.height - 16 - 8);
      setLeft(rect.left - (contentRect.width - rect.width) / 2 - 8);
    }
  }, [validChildRef, contentRect]);

  React.useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  function handleOpen() {
    // clearTimeout(hystersisTimer);
    // hystersisOpen = true;

    setVisible(true);

    if (onChange) {
      onChange(true);
    }
  }

  function handleClose() {
    // clearTimeout(hystersisTimer);
    // hystersisTimer = setTimeout(() => {
    //   hystersisOpen = false;
    // }, 800 + leaveDelay);

    setVisible(false);

    if (onChange) {
      onChange(false);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (onClick) {
      onClick(e);
    }

    if (triggerList.includes('click')) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      enterTimer.current = setTimeout(visible ? handleClose : handleOpen, enterDelay);
    }
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    if (onMouseEnter) {
      onMouseEnter(e);
    }

    if (triggerList.includes('hover')) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      // Remove the title ahead of time.
      validChildRef.current?.removeAttribute('title');

      // if (enterDelay || hystersisOpen) {
        enterTimer.current = setTimeout(handleOpen, enterDelay);
      // } else {
      //   handleOpen();
      // }
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
    if (onMouseLeave) {
      onMouseLeave(e);
    }

    if (triggerList.includes('hover')) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      leaveTimer.current = setTimeout(handleClose, leaveDelay);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLElement>) {
    if (onFocus) {
      onFocus(e);
    }
    if (triggerList.includes('focus')) {
      handleOpen();
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    if (onBlur) {
      onBlur(e);
    }
    if (triggerList.includes('focus') || triggerList.includes('click')) {
      handleClose();
    }
  }

  const childrenProps = {
    ...child.props,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: useCopyRef((child as any).ref, validChildRef),
  };

  const animationProps = useSpring({ opacity: visible ? 1 : 0, config: { duration: 200, easing: ease.easeQuadOut, } });

  return (
    <>
      {React.cloneElement(child, childrenProps)}
      <Portal>
        <TooltipView>
          {title !== null &&
            <TooltipContentView
              className={className}
              style={{...style, ...animationProps}}
              ref={contentRef}
              position={{ top, left }}
              visibility={visible}
              color={color}
              role="Tooltip"
            >
              {title}
              {arrow &&
                <TooltipArrowView color={color}>
                  <AiOutlineCaretDown/>
                </TooltipArrowView>
              }
            </TooltipContentView>
          }
        </TooltipView>
      </Portal>
    </>
  );
}

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  enterDelay: 100,
  leaveDelay: 100,
  arrow: true,
  trigger: 'hover',
};

Tooltip.propTypes = {

};

/** @component */
export default Tooltip;
