import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WhyReasons from '@site/src/components/WhyReasons';
import WhyComparison from '@site/src/components/WhyComparison';
import Heading from '@theme/Heading';

import styles from './why-kublade.module.css';

function WhyHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title text--primary">
                Why Choose Kublade?
              </Heading>
              <p className="hero__subtitle">The modern platform that makes Kubernetes deployments simple, secure and scalable through GitOps</p>
              <ul className="hero__list">
                <li>
                  <i className="bi bi-rocket"></i> Ship faster with automated deployments
                </li>
                <li>
                  <i className="bi bi-shield-check"></i> Reduce risks with built-in security
                </li>
                <li>
                  <i className="bi bi-graph-up"></i> Scale effortlessly across teams
                </li>
                <li>
                  <i className="bi bi-clock"></i> Save time with visual tools and AI
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
        <img src="/img/screenshots/editor.png" alt="Screenshot" className="hero__screenshot" />
      </header>
    </>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Effortless Kubernetes deployments"
      description="Kublade is a tool that makes it easy to deploy Kubernetes applications.">
      <WhyHeader />
      <main>
        <WhyReasons />
        <WhyComparison />
      </main>
    </Layout>
  );
}
