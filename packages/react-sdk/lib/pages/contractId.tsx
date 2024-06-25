import { useParams } from "react-router-dom";
import { useAccount } from "../hooks/account";
import { useEffect, useMemo } from "react";
// import ContractInteraction from "../components/ContractInteraction";
import ContractInteraction from "../components/ContractInteraction";

export default function ContractId() {
	const params = useParams();
	const { contractsByChain, account } = useAccount();

	const thisContract = useMemo(() => {
		return contractsByChain.filter((c) => c.address === params.id).at(0);
	}, [contractsByChain, params]);

	useEffect(() => {
		JSON.stringify(thisContract?.abi);
	}, [thisContract?.abi]);

	if (!thisContract) {
		return "Contract not registered";
	}

	return (
		<div className="h-full p-4 pb-20 overflow-y-auto">
			<center>
				<h1 className="font-bold title">{thisContract.symbol}</h1>
				<p>{thisContract.address}</p>
			</center>
			<ContractInteraction
				abi={JSON.stringify(thisContract?.abi)}
				contract={account!.contracts.get(thisContract.symbol)!}
			/>
		</div>
	);
}
