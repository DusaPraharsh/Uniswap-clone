import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x750056252798BB6F181f95A566042e349909ffD1";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/Ow_8SvcwKzLzgQBpVBl_K4Sh3cS69qot",
  },
};
