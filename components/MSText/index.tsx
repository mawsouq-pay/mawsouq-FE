import { Skeleton } from "@mui/material";
import { GlobalStyle, Text } from "./MSText.style";
import { MSTextProps } from "./types";

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
          <GlobalStyle />
          <Text
            {...props}
            style={style}
            className={className}
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
