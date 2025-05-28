import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import PrivacyPolicyContent from '@site/src/components/PrivacyPolicyContent';
import Heading from '@theme/Heading';

import styles from './privacy-policy.module.css';

function PrivacyPolicyHeader() {
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title text--primary">Privacy Policy</Heading>
              <p className={clsx('hero__subtitle', styles.subtitle)}>Privacy Policy for Kublade</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function PrivacyPolicy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for Kublade">
      <PrivacyPolicyHeader />
      <main>
        <PrivacyPolicyContent />
      </main>
    </Layout>
  );
}
