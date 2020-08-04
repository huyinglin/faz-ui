import React from 'react';

import {
  TooltipProps,
  Place,
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
import { useSpring, animated } from 'react-spring'
import { useMergedState } from '../../hooks/useMergedState';
import * as ease from 'd3-ease';
import { useRaf } from '../../hooks/useRaf';

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
  const windowRect = useMeasure();

  const { Portal } = usePortal(container);

  const [place, setPlace] = React.useState<Place | null>(null)

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
    if (childRect && visible) {
      handlePlacement(childRect, contentRect);
    }
  }, [windowRect, contentRect, childRef, placement, visible]);

  React.useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  const handlePlacement = useRaf((childRect: DOMRect, contentRect: DOMRect) => {
    /** Tooltip 的内容和 children 基于居中线水平方向的偏移，目的是让 Tooltip 的内容和 children 对齐。 */
    const verticalOffset = (contentRect.width - childRect.width) / 2;
    const horizontalOffset = (contentRect.height - childRect.height) / 2;

    /** children 的距离文档顶部的距离 */
    const tooltipTopOffset = window.scrollY + childRect.top;

    const { offsetWidth } = document.body;

    let newPlace: Place | null = place;
    switch (placement) {
      case 'top':
        newPlace = {
          top: tooltipTopOffset - contentRect.height - 24,
          left: childRect.left - verticalOffset - 8,
        };
        break;
      case 'topLeft':
        newPlace = {
          top: tooltipTopOffset - contentRect.height - 24,
          left: childRect.left,
        };
        break;
      case 'topRight':
        newPlace = {
          top: tooltipTopOffset - contentRect.height - 24,
          right: offsetWidth - childRect.right,
        };
        break;
      case 'left':
        newPlace = {
          top: tooltipTopOffset - horizontalOffset - 6,
          left: childRect.left - contentRect.width - 28,
        };
        break;
      case 'leftTop':
        newPlace = {
          top: tooltipTopOffset,
          left: childRect.left - contentRect.width - 28,
        };
        break;
      case 'leftBottom':
        newPlace = {
          top: window.scrollY + childRect.bottom - contentRect.height - 12,
          left: childRect.left - contentRect.width - 28,
        };
        break;
      case 'rightTop':
        newPlace = {
          top: tooltipTopOffset,
          left: childRect.right + 12,
        };
        break;
      case 'right':
        newPlace = {
          top: tooltipTopOffset - horizontalOffset - 6,
          left: childRect.right + 12,
        };
        break;
      case 'rightBottom':
        newPlace = {
          top: window.scrollY + childRect.bottom - contentRect.height - 12,
          left: childRect.right + 12,
        };
        break;
      case 'bottomLeft':
        newPlace = {
          top: window.scrollY + childRect.bottom + 12,
          left: childRect.left,
        };
        break;
      case 'bottomRight':
        newPlace = {
          top: window.scrollY + childRect.bottom + 12,
          right: offsetWidth - childRect.right,
        };
        break;
      case 'bottom':
        newPlace = {
          top: window.scrollY + childRect.bottom + 12,
          left: childRect.left - verticalOffset - 8,
        };
        break;
      default:
        break;
    };

    setPlace(newPlace);
  });

  function handleOpen() {
    setVisible(true);

    if (onChange) {
      onChange(true);
    }
  }

  function handleClose() {
    setVisible(false);

    if (!props.visible) {
      setPlace(null);
    }

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

      enterTimer.current = setTimeout(handleOpen, enterDelay);
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
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      enterTimer.current = setTimeout(handleOpen, enterDelay);
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    if (onBlur) {
      onBlur(e);
    }
    if (triggerList.includes('focus') || triggerList.includes('click')) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      leaveTimer.current = setTimeout(handleClose, leaveDelay);
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

  const animationProps = useSpring({ opacity: place ? 1 : 0, config: { duration: 200, easing: ease.easeQuadOut, } });

  return (
    <>
      {React.cloneElement(child, childrenProps)}
      <Portal>
        {title !== null &&
          <TooltipView>
            <animated.div style={animationProps}>
              <TooltipContentView
                className={className}
                style={style}
                ref={contentRef}
                placement={place || {}}
                background={color}
                role="Tooltip"
              >
                  {title}
                  {arrow &&
                    <TooltipArrowView
                      background={color}
                      placement={placement}
                    >
                      <AiOutlineCaretDown/>
                    </TooltipArrowView>
                  }
              </TooltipContentView>
            </animated.div>
          </TooltipView>
        }
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

/** @component */
export default Tooltip;
