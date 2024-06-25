/* eslint-disable @typescript-eslint/no-explicit-any */

import { Contract } from "ethers";
import { Fragment, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import Highlight from "react-highlight";
import { LuFileCode } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ContractReadLine({
	contract,
	method,
}: {
	contract: Contract;
	method: any;
}) {
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);
	const [showCode, setShowCode] = useState(false);
	const [output, setOutput] = useState("");
	const [data, setData] = useState(
		method.inputs.map((input: any) => ({
			...input,
			value: "",
		}))
	);

	const sourceCode = () => {
		if (method.stateMutability !== "view") {
			return `
${
	data.length > 0
		? data.map((d: any) => `const ${d.name} = "${d.value}";`).join("\n")
		: ""
}
const call = await contract["${method.name}"](${data
				.map((d: any) => d.name)
				.join(", ")});
const tx = await call.wait();`;
		}
		return `
${
	data.length > 0
		? data.map((d: any) => `const ${d.name} = "${d.value}";`).join("\n")
		: ""
}
const query = await contract["${method.name}"](${data
			.map((d: any) => d.name)
			.join(", ")});`;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e?.preventDefault();
		if (data.length > 0) {
			const query = await contract[method.name](
				...data.map((d: any) => d.value)
			);
			if (method.stateMutability !== "view") {
				const tx = await query.wait();
				setOutput(tx.hash);
			} else {
				setOutput(query.toString());
			}
		} else {
			const query = await contract[method.name]();
			setOutput(query.toString());
		}
		setLoading(false);
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<form className="flex flex-col w-full gap-2 " onSubmit={handleSubmit}>
			<h3 className="text-sm capitalize">{method.name}</h3>

			{data.map((input: any, i: number) => (
				<div key={i} className="w-full">
					<input
						type="text"
						className="block w-full border-2 input input-bordered"
						placeholder={`${input.name} (${input.type})`}
						name={input.name}
						value={input.value}
						onChange={(e) => {
							setData((prev: any) =>
								prev.map((field: any) => {
									if (field.name === input.name) {
										field.value = e.target.value;
									}
									return field;
								})
							);
						}}
					/>
				</div>
			))}
			<div className="flex gap-2">
				<button
					type="submit"
					className={cn("btn  flex-grow", {
						"btn-warning": method.stateMutability !== "view",
						"btn-info": method.stateMutability === "view",
					})}
				>
					{loading && <span className="loading loading-spinner"></span>}{" "}
					{method.stateMutability === "view" ? "Call" : "Send"}
				</button>
				<button
					type="button"
					className={cn("btn btn-info btn-square")}
					onClick={() => setShowCode(!showCode)}
				>
					<LuFileCode size={20} />
				</button>
			</div>
			{output === "" ? null : <p>{output}</p>}

			{!showCode ? null : (
				<Fragment>
					<Highlight className="select-text javascript">
						{sourceCode().trim()}
					</Highlight>
					<CopyToClipboard
						text={sourceCode().trim()}
						onCopy={() => setCopied(true)}
					>
						<button className="btn btn-block">
							{copied ? "Copied" : "Copy code"}
						</button>
					</CopyToClipboard>
				</Fragment>
			)}
		</form>
	);
}
