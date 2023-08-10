import { motion } from "framer-motion";

interface BackdropProps {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
	return (
		<motion.div
			onClick={onClick}
			className="absolute top-0 left-0 z-20 flex justify-center items-center w-[100vw] h-[100vh]"
			style={{ background: "rgba(0,0,0,0.4)" }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;
