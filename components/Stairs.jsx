import { animate, easeInOut, motion } from "framer-motion"

const stairAnimation = {
    inital: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {/* Render 6 motions divs, each representing a step of the stairs.
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div is calculated dynamically based on it's reverse index,
        creating a staggred effect with decreasing delay for each subsequent step.
        */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: easeInOut,
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-screen w-full bg-white relative"
                    />
                )
            }
            )}
        </>
    )
}

export default Stairs
