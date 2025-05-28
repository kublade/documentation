import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import LegalDisclosureContent from '@site/src/components/LegalDisclosureContent';
import Heading from '@theme/Heading';

import styles from './legal-disclosure.module.css';

function LegalDisclosureHeader() {
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title text--primary">Legal Disclosure</Heading>
              <p className={clsx('hero__subtitle', styles.subtitle)}>Legal Disclosure for Kublade</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function LegalDisclosure(): ReactNode {
  return (
    <Layout
      title="Legal Disclosure"
      description="Legal Disclosure for Kublade">
      <LegalDisclosureHeader />
      <main>
        <LegalDisclosureContent />
      </main>
    </Layout>
  );
}
