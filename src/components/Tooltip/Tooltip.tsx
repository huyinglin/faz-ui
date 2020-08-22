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
import { useMergedState } from '../../hooks/useMergedState';
import { useRaf } from '../../hooks/useRaf';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useSpring, animated } from 'react-spring'
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
    space = 12,
    className,
    style,
    childrenFocus,
    onChange,
  } = props;

  const triggerList: string[] = React.useMemo(() => typeof trigger === 'string' ? [trigger] : trigger, [trigger]);
  const childRef = React.useRef<HTMLSpanElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const enterTimer = React.useRef<number>();
  const leaveTimer = React.useRef<number>();

  const windowRect = useMeasure();

  const { Portal } = usePortal(container);

  const [place, setPlace] = React.useState<Place | null>(null);
  const [tooltipHover, setTooltipHover] = React.useState<boolean>(false);

  const [visible, setVisible] = useMergedState<boolean>(props.visible || defaultVisible, {
    value: props.visible,
    isProps: 'visible' in props,
    innerControlled: true,
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
      handlePlacement(childRect);
    }
    if (!visible) {
      handleClose();
    }
  }, [windowRect, childRef, placement, visible]);

  React.useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  const handlePlacement = useRaf((childRect: DOMRect) => {
    const tooltipHeight = contentRef.current?.offsetHeight || 0;
    const tooltipWidth = contentRef.current?.offsetWidth || 0;

    /** Tooltip 和 children 基于居中线水平方向的偏移 */
    const verticalOffset = (tooltipWidth - childRect.width) / 2;
    const horizontalOffset = (tooltipHeight - childRect.height) / 2;

    /** children 的距离文档顶部的距离 */
    const childTopOffset = window.scrollY + childRect.top;

    const topPlacementTop = childTopOffset - tooltipHeight - space;
    const buttomPlacementTop = window.scrollY + childRect.bottom + space;
    const leftPlacementLeft = childRect.left - tooltipWidth - space;
    const rightPlacementLeft = childRect.right + space;

    let newPlace: Place | null = place;

    switch (placement) {
      case 'top':
        newPlace = {
          top: topPlacementTop,
          left: childRect.left - verticalOffset,
        };
        break;
      case 'topLeft':
        newPlace = {
          top: topPlacementTop,
          left: childRect.left,
        };
        break;
      case 'topRight':
        newPlace = {
          top: topPlacementTop,
          right: document.body.offsetWidth - childRect.right,
        };
        break;
      case 'bottom':
        newPlace = {
          top: buttomPlacementTop,
          left: childRect.left - verticalOffset,
        };
        break;
      case 'bottomLeft':
        newPlace = {
          top: buttomPlacementTop,
          left: childRect.left,
        };
        break;
      case 'bottomRight':
        newPlace = {
          top: buttomPlacementTop,
          right: document.body.offsetWidth - childRect.right,
        };
        break;
      case 'left':
        newPlace = {
          top: childTopOffset - horizontalOffset,
          left: leftPlacementLeft,
        };
        break;
      case 'leftTop':
        newPlace = {
          top: childTopOffset,
          left: leftPlacementLeft,
        };
        break;
      case 'leftBottom':
        newPlace = {
          top: window.scrollY + childRect.bottom - tooltipHeight,
          left: leftPlacementLeft,
        };
        break;
      case 'rightTop':
        newPlace = {
          top: childTopOffset,
          left: rightPlacementLeft,
        };
        break;
      case 'right':
        newPlace = {
          top: childTopOffset - horizontalOffset,
          left: rightPlacementLeft,
        };
        break;
      case 'rightBottom':
        newPlace = {
          top: window.scrollY + childRect.bottom - tooltipHeight,
          left: rightPlacementLeft,
        };
        break;
      default:
        newPlace = null;
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
    setPlace(null);
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

      enterTimer.current = setTimeout(() => {
        if (visible) {
          if (!tooltipHover) {
            handleClose();
          }
        } else {
          handleOpen();
        }
      }, enterDelay);
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

    if (
      triggerList.includes('hover') &&
      !tooltipHover
    ) {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      leaveTimer.current = setTimeout(handleClose, leaveDelay);
    }
  }

  function handleTooltipClick() {
    if (childrenFocus) {
      childrenFocus();
    } else {
      childRef.current?.focus();
    }
  }

  function handleTooltipMouseEnter() {
    setTooltipHover(true);
  }

  function handleTooltipMouseLeave() {
    setTooltipHover(false);
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
    if (
      triggerList.includes('focus') ||
      (triggerList.includes('click') && !tooltipHover)
    ) {
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
                className={`faz-ui_tooltip ${className}`}
                style={style}
                ref={contentRef}
                placement={place || {}}
                background={color}
                role="Tooltip"
                onClick={handleTooltipClick}
                onMouseEnter={handleTooltipMouseEnter}
                onMouseLeave={handleTooltipMouseLeave}
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

export default Tooltip;
