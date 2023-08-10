"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./modal";

const WaitlistForm: React.FC = () => {
	const [error, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [dropdownValue, setDropdownValue] = useState("Options");
	const [modalOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);
	const formVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	const handleClick = () => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError(false);
			modalOpen ? close() : open();
		} else {
			setError(true);
		}
	};
	return (
		<div className="w-full z-15 max-w-md">
			<motion.form
				variants={formVariants}
				initial="hidden"
				animate="visible"
				className="flex flex-col justify-center items-center bg-[rgba(17, 25, 40, 0.75)] backdrop-blur-sm backdrop-saturate-150 border-[1px] border-[rgba(0, 0, 0, 0.012)] max-w-md shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
			>
				<div className="w-full mb-6">
					<label
						className="block text-white text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className={`shadow appearance-none border ${
							error ? "border-red-500" : ""
						} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
						id="email"
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="johndoe123@gmail.com"
					/>
					{error && (
						<p className="text-red-500 text-xs italic">
							Please choose a correct Email Address.
						</p>
					)}
				</div>
				<div className="relative w-[50%] mb-6 inline-block text-left">
					<div>
						<button
							type="button"
							onClick={() => setShowDropdown(!showDropdown)}
							className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							id="menu-button"
							aria-expanded="true"
							aria-haspopup="true"
						>
							{dropdownValue === "Options" ? "Options" : dropdownValue}
							<svg
								className="-mr-1 h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
					{showDropdown && (
						<div
							className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
						>
							<ul className="py-1" role="none">
								<li
									onClick={() => {
										setShowDropdown(!showDropdown),
											setDropdownValue("Company");
									}}
									className="text-gray-700 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-200 block px-4 py-2 text-sm"
									role="menuitem"
									id="menu-item-2"
								>
									Company
								</li>
								<li
									onClick={() => {
										setShowDropdown(!showDropdown),
											setDropdownValue("Tester");
									}}
									className="text-gray-700 cursor-pointer hover:bg-gray-200 block px-4 py-2 text-sm"
									role="menuitem"
									id="menu-item-2"
								>
									Tester
								</li>
							</ul>
						</div>
					)}
				</div>

				<div className="flex items-center justify-between">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={handleClick}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Join our waitlist
					</motion.button>
				</div>
			</motion.form>
			<AnimatePresence
				initial={false}
				mode="wait"
				onExitComplete={() => null}
			>
				{modalOpen && <Modal handleClose={close} />}
			</AnimatePresence>
		</div>
	);
};

export default WaitlistForm;
