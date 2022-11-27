import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x76BFd13Ac61dc7A1ED7B8bc7FB0a7e28c026bC91";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/Ow_8SvcwKzLzgQBpVBl_K4Sh3cS69qot",
  },
};
