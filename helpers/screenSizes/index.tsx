import { useEffect, useMemo, useState } from "react";

function useCustomBreakpoint(): {
  xxl: boolean;
  xl: boolean;
  lg: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
  isMobile: boolean;
} {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
      };
console.log(window.innerHeight)
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const ComputedValues = useMemo(
    () => ({
      xxl: width !== null && width > 1599,
      xl: width !== null && width > 1199,
      lg: width !== null && width > 991,
      md: width !== null && width > 767,
      sm: width !== null && width > 575,
      xs: width !== null && width < 576,
      isMobile: width !== null && width <= 768,
    }),
    [width]
  );

  return ComputedValues;
}

export default useCustomBreakpoint;
