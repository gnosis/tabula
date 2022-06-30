import { chainIdToChainName } from "../constants/chain"

export const checkIsValidChain = (
  currentChain: number,
  publicationId?: string,
): { network: string; isValid: boolean } => {
  const currentChainName = chainIdToChainName(currentChain)
  const publicationChainName = publicationId?.split(":")[0]

  if (currentChainName == null) {
    // unsupported chain
    return { network: "", isValid: false }
  }

  if (publicationChainName == null) {
    return { network: currentChainName, isValid: true }
  }

  return { network: publicationChainName, isValid: currentChainName === publicationChainName }
}
