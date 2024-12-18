import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const useMediaQuery = () => {
    const screens = useBreakpoint();
    return { ...screens }
}
export default useMediaQuery;