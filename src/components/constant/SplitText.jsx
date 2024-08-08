import React from 'react'
import { delay, motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
    let words = children.split(' ')
    const container = {
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.4,
                duration: 0.3,
            }
        })
    }
    return words.map((word, i) => {
        return (
            <div
                key={children + i}
                style={{ display: 'inline-block', }}
            >
                <motion.div
                    {...rest}
                    style={{ display: 'inline-block', willChange: 'transform' }}
                    custom={i}
                    initial={{ y: 70, opacity: 0 }}
                    animate="visible"
                    variants={container}
                >
                    {word + (i !== words.length - 1 ? '\u00A0' : '')}
                </motion.div>
            </div>
        )
    })
}
