import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import { Exchange, Loader, WalletButton } from "./components";
import zapLogo from "./assets/zapLogo.png";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img src={zapLogo} alt="logo" className="w-22 h-22 cursor-pointer" />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Zap Swap</h1>
          <p className={styles.subTitle}>Exchange tokens instantly</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
