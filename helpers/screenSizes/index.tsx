import { useEffect, useMemo, useState } from 'react'

function useCustomBreakpoint(): {
    xxl: boolean
    xl: boolean
    lg: boolean
    md: boolean
    sm: boolean
    xs: boolean
    isMobile: boolean
} {
    const [width, setWidth] = useState(window.innerWidth)
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const ComputedValues = useMemo(
        () => ({
            xxl: width > 1599,
            xl: width > 1199,
            lg: width > 991,
            md: width > 767,
            sm: width > 575,
            xs: width < 576,
            isMobile: width <= 768
        }),
        [width]
    )

    return ComputedValues
}
export default useCustomBreakpoint
