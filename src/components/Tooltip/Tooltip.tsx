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
    placement = 'top',
    trigger = 'hover',
    enterDelay = 100,
    leaveDelay = 100,
    className,
    style,
    onChange,
  } = props;

  const triggerList: string[] = React.useMemo(() => typeof trigger === 'string' ? [trigger] : trigger, [trigger]);
  const childRef = React.useRef<HTMLSpanElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const enterTimer = React.useRef<number>();
  const leaveTimer = React.useRef<number>();

  const contentRect = useMeasure(contentRef);

  let hystersisOpen = false;
  let hystersisTimer: number;

  const { Portal } = usePortal(container);

  const [top, setTop] = React.useState<number | undefined>(0);
  const [left, setLeft] = React.useState<number | undefined>(0);
  const [right, setRight] = React.useState<number | undefined>(0);

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
    const childRect = childRef.current?.getBoundingClientRect();
    if (childRect) {
      /** Tooltip 的内容和 children 基于居中线水平方向的偏移，目的是让 Tooltip 的内容和 children 对齐。 */
      const verticalOffset = (contentRect.width - childRect.width) / 2;
      const horizontalOffset = (contentRect.height - childRect.height) / 2;

      /** children 的距离文档顶部的距离 */
      const tooltipTopOffset = window.scrollY + childRect.top;

      const { offsetWidth } = document.body;

      const placementObj: any = {
        top: {
          top: tooltipTopOffset - contentRect.height - 24,
          left: childRect.left - verticalOffset - 8,
        },
        topLeft: {
          top: tooltipTopOffset - contentRect.height - 24,
          left: childRect.left,
        },
        topRight: {
          top: tooltipTopOffset - contentRect.height - 24,
          right: offsetWidth - childRect.right,
        },
        left: {
          top: tooltipTopOffset - horizontalOffset - 6,
          left: childRect.left - contentRect.width - 28,
        },
        leftTop: {
          top: tooltipTopOffset,
          left: childRect.left - contentRect.width - 28,
        },
        leftBottom: {
          top: window.scrollY + childRect.bottom - contentRect.height - 12,
          left: childRect.left - contentRect.width - 28,
        },
        rightTop: {
          top: tooltipTopOffset,
          left: childRect.right + 12,
        },
        right: {
          top: tooltipTopOffset - horizontalOffset - 6,
          left: childRect.right + 12,
        },
        rightBottom: {
          top: window.scrollY + childRect.bottom - contentRect.height - 12,
          left: childRect.right + 12,
        },
        bottomLeft: {
          top: window.scrollY + childRect.bottom + 12,
          left: childRect.left,
        },
        bottomRight: {
          top: window.scrollY + childRect.bottom + 12,
          right: offsetWidth - childRect.right,
        },
        bottom: {
          top: window.scrollY + childRect.bottom + 12,
          left: childRect.left - verticalOffset - 8,
        },
      };

      setTop(placementObj[placement].top);
      setLeft(placementObj[placement].left);
      setRight(placementObj[placement].right);
    }
  }, [childRef, contentRect, placement]);

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
      childRef.current?.removeAttribute('title');

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
    ref: useCopyRef((child as any).ref, childRef),
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
              position={{ top, left, right }}
              visible={visible}
              color={color}
              role="Tooltip"
            >
              {title}
              {arrow &&
                <TooltipArrowView
                  color={color}
                  placement={placement}
                >
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
