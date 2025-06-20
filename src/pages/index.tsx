import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageApp from '@site/src/components/HomepageApp';
import HomepageReasons from '@site/src/components/HomepageReasons';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title">
                <img src="/img/logo-full-color.svg" alt={siteConfig.title} className="hero__logo" />
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
                  <i className="bi bi-code-slash"></i> Free and open source (Apache-2.0)
                </li>
              </ul>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Get Started
                </Link>
                <Link
                  className="button button--primary button--lg"
                  to="mailto:support@kublade.org">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/screenshots/dashboard.png" alt="Screenshot" className="hero__screenshot" />
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
        <HomepageReasons />
        <HomepageApp />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
