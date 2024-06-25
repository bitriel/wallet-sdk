import { BigNumberish, formatUnits, parseUnits } from "ethers";

export const SEL = (amount: number) => {
	return parseUnits(amount.toString(), "ether");
};

export const prettyBalance = (amount: BigNumberish) => {
	return parseFloat(formatUnits(amount, 18)).toFixed(4);
};
