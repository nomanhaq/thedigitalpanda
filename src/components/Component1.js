import React from 'react'
import {useSpring, animated} from 'react-spring'

export default function Component1() {
    const props = useSpring({ number: 10000, from: { number: 1 } })
    return <div style={c1H1Style}><animated.span>{props.number}</animated.span></div>
}

const c1H1Style = {
    background: 'steelblue', 
    color: 'white', 
    padding: '1rem',
    alignItems: 'center',
    fontWeight: 'bold'
}
