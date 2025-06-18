import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './enterprise-support.module.css';

function EnterpriseSupportHeader() {
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title text--primary">Enterprise Support</Heading>
              <p className={clsx('hero__subtitle', styles.subtitle)}>Next level cloud solutions, backed by experts</p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12 pricing__container">
              <table className="table pricing">
                <thead>
                  <tr>
                    <th className="table__stretch">Package</th>
                    <th>
                      Hours
                      <span className="small">
                        per year
                      </span>
                    </th>
                    <th>Base Rate</th>
                    <th>List Price</th>
                    <th>Overcharge Percentage</th>
                    <th>Overcharge Rate</th>
                    <th>Response Time</th>
                    <th>Support Channel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table__stretch">Starter</td>
                    <td>40</td>
                    <td>150.00 €</td>
                    <td className="pricing__highlight">6,000.00 €</td>
                    <td>7%</td>
                    <td>160.00 €</td>
                    <td>Next business day</td>
                    <td>Email, Gittr</td>
                  </tr>
                  <tr>
                    <td className="table__stretch">Professional</td>
                    <td>120</td>
                    <td>145.00 €</td>
                    <td className="pricing__highlight">17,400.00 €</td>
                    <td>7%</td>
                    <td>155.00 €</td>
                    <td>Within 24 hours</td>
                    <td>Email, Gittr, Phone (business hours)</td>
                  </tr>
                  <tr>
                    <td className="table__stretch">Enterprise</td>
                    <td>240</td>
                    <td>140.00 €</td>
                    <td className="pricing__highlight">33,600.00 €</td>
                    <td>7%</td>
                    <td>150.00 €</td>
                    <td>Within 6 hours</td>
                    <td>Email, Gittr, Phone (24/7)</td>
                  </tr>
                  <tr>
                    <td className="table__stretch">Emergency</td>
                    <td>0</td>
                    <td className="pricing__highlight">180.00 €</td>
                    <td>0.00 €</td>
                    <td>0%</td>
                    <td>0.00 €</td>
                    <td>Up to 1 hour</td>
                    <td>Email, Gittr, Phone (24/7)</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="mailto:support@kublade.org">
                  Talk to an Expert
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Try it yourself
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function EnterpriseSupport(): ReactNode {
  return (
    <Layout
      title="Enterprise Support"
      description="Next level cloud solutions built on Kublade, backed by experts">
      <EnterpriseSupportHeader />
    </Layout>
  );
}
