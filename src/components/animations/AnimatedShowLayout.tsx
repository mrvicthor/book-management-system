import React from "react";
import { useEffect, useState } from "react";
import { SimpleShowLayout, type SimpleShowLayoutProps } from "react-admin";

interface AnimatedShowLayoutProps extends SimpleShowLayoutProps {
  animationDelay?: number;
  animationType?: "fadeIn" | "slideUp" | "slideLeft" | "stagger";
  duration?: number;
}

const AnimatedShowLayout: React.FC<AnimatedShowLayoutProps> = ({
  children,
  animationDelay = 150,
  animationType = "stagger",
  duration = 400,
  ...props
}) => {
  const [visibleFields, setVisibleFields] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);

      if (animationType === "stagger") {
        const childrenArray = React.Children.toArray(children);
        childrenArray.forEach((_, index) => {
          setTimeout(() => {
            setVisibleFields((prev) => prev + 1);
          }, index * animationDelay);
        });
      } else {
        setVisibleFields(React.Children.count(children));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [children, animationDelay, animationType]);

  const getAnimationStyles = (index: number) => {
    const isFieldVisible = index < visibleFields;

    switch (animationType) {
      case "fadeIn":
        return {
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${duration}ms ease-out`,
        };
      case "slideUp":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `all ${duration}ms ease-out`,
        };
      case "slideLeft":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-30px)",
          transition: `all ${duration}ms ease-out`,
        };
      case "stagger":
        return {
          opacity: isFieldVisible ? 1 : 0,
          transform: isFieldVisible ? "translateY(0)" : "translateY(15px)",
          transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        };
      default:
        return {};
    }
  };

  return (
    <SimpleShowLayout
      {...props}
      sx={{
        ...props.sx,
        "& > .RaLabeled-root": {
          marginBottom: 2,
        },
        "& > div": {
          marginBottom: 2,
        },
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
          ...child.props,
          sx: {
            ...child.props.sx,
            ...getAnimationStyles(index),
          },
        });
      })}
    </SimpleShowLayout>
  );
};

export default AnimatedShowLayout;
