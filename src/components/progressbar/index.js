import React, { useEffect, useState, useRef } from 'react';

import './styles.css';

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        progress,
        circleOneStroke,
        circleTwoStroke,
        title,
        valueTitle
    } = props;


    const size = 150
    const strokeWidth = 2
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <>
            <svg
                className="svg"
                width={size}
                height={size}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text
                    x={`${center}`}
                    y={`${center - 40}`}
                    className="svg-circle-text">
                    {title}
                </text>
                <text
                    x={`${center}`}
                    y={`${center + 20}`}
                    className="svg-value-text">
                    {`${valueTitle < 10 ? '0' : ''}${valueTitle}`}
                </text>
            </svg>
        </>
    );
}

export default ProgressBar;
