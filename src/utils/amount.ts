import { BN } from "@polkadot/util";
import { ethers } from "ethers";

/**
 * Parses amount for both Substrate and EVM chains
 * @param amount The amount to convert (can be string, number, boolean, Uint8Array, or null)
 * @param chainType The type of chain ('substrate' or 'evm')
 * @param decimals Number of decimal places (default: 18)
 * @returns The amount in base units as string
 */
export function parseTransactionAmount(
    amount: string | number | boolean | Uint8Array<ArrayBufferLike> | null,
    chainType: "substrate" | "evm",
    decimals: number = 18
): string {
    // Handle null or undefined
    if (amount === null || amount === undefined) {
        throw new Error("Amount cannot be null or undefined");
    }

    if (chainType === "evm") {
        return ethers.parseEther(amount.toString()).toString();
    } else {
        return new BN(amount.toString())
            .mul(new BN(10).pow(new BN(decimals)))
            .toString();
    }
}

/**
 * Formats amount for both Substrate and EVM chains
 * @param amount The amount in base units (as string)
 * @param chainType The type of chain ('substrate' or 'evm')
 * @param decimals Number of decimal places (default: 18)
 * @returns The human-readable amount as string
 */
export function formatTransactionAmount(
    amount: string,
    chainType: "substrate" | "evm",
    decimals: number = 18
): string {
    if (chainType === "evm") {
        return ethers.formatEther(amount);
    } else {
        const bn = new BN(amount);
        const divisor = new BN(10).pow(new BN(decimals));
        const whole = bn.div(divisor).toString();
        const fraction = bn.mod(divisor).toString().padStart(decimals, "0");
        return `${whole}.${fraction}`;
    }
}
