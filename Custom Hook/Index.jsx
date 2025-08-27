import React from 'react'
import { UseWindowSize } from './UseWindowSize';

const Index = () => {
    const { width, height } = UseWindowSize();

    return (
        <div style={{ padding: '20px' }}>
            <h1>
                Window Size: {width} x {height}
            </h1>
            <h2>{width < 600 ? '📱 Mobile View' : '💻 Desktop View'}</h2>
        </div>
    )
}

export default Index;