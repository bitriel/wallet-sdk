/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";
import ContractReadLine from "./ContractReadLine";
import { Contract } from "ethers";

const ContractInteraction = ({
	abi,
	contract,
}: {
	abi: string;
	contract: Contract;
}) => {
	const parsed = useMemo(() => {
		try {
			return JSON.parse(abi);
		} catch (e) {
			console.log("parse error: ", e);
		}
	}, [abi]);

	if (!abi) {
		return "No ABI";
	}

	return (
		<div>
			<h2 className="my-4 font-medium divider divider-start">Read</h2>
			<div className="flex flex-col gap-8">
				{parsed
					.filter(
						(method: any) =>
							method.type === "function" && method.stateMutability === "view"
					)
					.map((method: any, index: number) => (
						// <div key={index} className="flex flex-col w-full gap-2 ">
						// 	<h3 className="text-sm capitalize">{method.name}</h3>

						// 	{method.inputs.map((input: any, i: number) => (
						// 		<div key={i} className="w-full">
						// 			<input
						// 				type="text"
						// 				className="block w-full border-2 input input-bordered"
						// 				placeholder={`${input.name} (${input.type})`}
						// 				name={`${method.name}-${input.name}`}
						// 			/>
						// 		</div>
						// 	))}
						// 	<button className={cn("btn btn-block btn-info ")}>Call</button>
						// </div>
						<ContractReadLine key={index} method={method} contract={contract} />
					))}
			</div>

			<h2 className="mt-8 mb-4 font-medium divider divider-start">Write</h2>
			<div className="flex flex-col gap-8 mb-4">
				{parsed
					?.filter(
						(method: any) =>
							method?.type === "function" && method?.stateMutability !== "view"
					)
					.map((method: any, index: number) => (
						// <div key={index} className="flex flex-col w-full gap-2">
						// 	<h3 className="text-sm capitalize">{method.name}</h3>

						// 	{method.inputs.map((input: any, i: number) => (
						// 		<div key={i} className="w-full">
						// 			<input
						// 				type="text"
						// 				className="block w-full border-2 input input-bordered"
						// 				placeholder={`${input.name} (${input.type})`}
						// 				name={`${method.name}-${input.name}`}
						// 			/>
						// 		</div>
						// 	))}
						// 	<button className={cn("btn btn-block btn-warning ")}>Send</button>
						// </div>
						<ContractReadLine key={index} method={method} contract={contract} />
					))}
			</div>
		</div>
	);
};

export default ContractInteraction;
