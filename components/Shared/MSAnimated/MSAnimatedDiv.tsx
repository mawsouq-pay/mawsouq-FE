import { Variants, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedDivProps {
	children: ReactNode;
}

const fadeInVariants: Variants = {
	offscreen: {
		opacity: 0,
		y: 50,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.5,
		},
	},
};

const MSAnimatedDiv: React.FC<AnimatedDivProps> = ({ children }) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.5 }}
			variants={fadeInVariants}
		>
			{children}
		</motion.div>
	);
};

export default MSAnimatedDiv;
