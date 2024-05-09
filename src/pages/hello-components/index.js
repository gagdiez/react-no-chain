import styles from '@/styles/app.module.css';

import { Components } from '@/config';
import { Profile } from '@/social-components/profile';
import { DocsCard, HelloNearCard } from '@/components/cards';

import { useContext } from 'react';
import { NearContext } from '@/context';

export default function HelloComponents() {
  const { wallet, signedAccountId } = useContext(NearContext);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Loading components from: &nbsp;
            <code className={styles.code}>{Components.socialDB}</code>
          </p>
        </div>
        <div className={styles.center}>
          <h1>
            <code>Multi-chain</code> Components Made Simple
          </h1>
        </div>
        <div className="row">
          <div className="col-12">
            <Profile accountId={signedAccountId} />
          </div>
        </div>
        <hr />

        <div className={styles.grid}>
          <DocsCard />
          <HelloNearCard />
        </div>
      </main>
    </>
  );
}
