import {useEffect, useRef} from 'react';
import {useInView, useMotionValue, useSpring} from 'framer-motion';

interface IProps {
    value: number;
    direction?: 'up' | 'down';
    withoutComma?: boolean;
}

export function AnimatedCounter({value, direction = 'up', withoutComma}: IProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 50,
    });
    const isInView = useInView(ref, {once: true, margin: '-20px'});

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === 'down' ? 0 : value);
        }
    }, [motionValue, isInView, direction, value]);

    useEffect(
        () =>
            springValue.on('change', (latest) => {
                if (ref.current) {
                    const formattedNumber = Intl.NumberFormat('en-US').format(Number(latest.toFixed(0)));
                    ref.current.textContent = withoutComma ? formattedNumber.replace(/,/g, ' ') : formattedNumber;
                }
            }),
        [springValue, withoutComma],
    );

    return <span ref={ref}/>;
}
