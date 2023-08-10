import { motion } from "framer-motion";
import Backdrop from "./backdrop";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

interface ModalProps {
	handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleClose }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="relative z-30 flex flex-col rounded-lg w-[80vw] sm:w-[50vw] h-[20vh] sm:h-[30vh] justify-center items-center backdrop-blur-sm bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 backdrop-saturate-150"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<p className="text-black font-semibold py-4 text-lg">
					Waitlist Joined successfully!!
				</p>
				<button
					className="px-4 py-1 rounded-lg text-white bg-gray-700"
					onClick={handleClose}
				>
					Close
				</button>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
