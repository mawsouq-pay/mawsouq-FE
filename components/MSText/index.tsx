import { Skeleton } from "@mui/material";
import { Text } from "./MSText.style";
import { MSTextProps } from "./types";
import Styles from "./MSText.module.css";

const MSText: React.FC<MSTextProps> = ({
  children,
  className = "",
  style,
  color,
  fontSize,
  fontWeight,
  isLoading,
  skeletonHeight,
  skeletonWidth,
  ...props
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          animation={false}
          variant="text"
          width={skeletonWidth}
          height={skeletonHeight}
        />
      ) : (
        <>
          <Text
            {...props}
            style={style}
            className={`${Styles.text} ${className}`}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
          >
            {children}
          </Text>
        </>
      )}
    </>
  );
};

export default MSText;
