import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            <img src="/img/logo-full.svg" alt={siteConfig.title} className="hero__logo" />
          </Heading>
          <p className="hero__subtitle">The simple templating engine for your Kubernetes manifests</p>
          <ul className="hero__list">
            <li>
              <i className="bi bi-people"></i> Self-service for your team or customers
            </li>
            <li>
              <i className="bi bi-easel"></i> Easy to use for non-technical users
            </li>
            <li>
              <i className="bi bi-cloud-check"></i> Compatible with any modern cloud provider
            </li>
            <li>
              <i className="bi bi-code-slash"></i> Free and open source (AGPL-3.0)
            </li>
          </ul>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Effortless Kubernetes deployments"
      description="Kublade is a tool that makes it easy to deploy Kubernetes applications.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
