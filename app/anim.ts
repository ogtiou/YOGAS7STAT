import { Variants } from "framer-motion";

export const fading: Variants = {
    closed: {
        opacity: 0,
        userSelect: 'none'
    },
    open: {
        opacity: 1,
        userSelect: 'all'
    }
}