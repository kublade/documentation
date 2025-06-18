import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function WhyComparison(): ReactNode {
  return (
    <section className={styles.app}>
      <div className="container my-5">
        <div className={clsx('row', styles.headline)}>
          <div className="col col--8 text--center">
            <h2 className="text--primary text--normal">Kublade vs. Other Tools</h2>
            <p>Kublade enhances your existing Kubernetes toolchain by providing a modern, GitOps-native layer that seamlessly integrates with and extends your current infrastructure. It unifies and streamlines your workflow while preserving the tools and processes your team already knows and trusts.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col--12">
            <table className="table features">
              <thead>
                <tr>
                  <th className="table__stretch">Feature</th>
                  <th>Helm/Kustomize</th>
                  <th>FluxCD</th>
                  <th>Backstage</th>
                  <th>Internal Tools</th>
                  <th>Kublade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table__stretch">Visual manifest authoring</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">AI-assisted manifest authoring</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">Templating & reuse</td>
                  <td><i className="bi bi-exclamation-triangle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">GitOps-native deployment</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">GitOps preview before merge</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">RBAC & SSO out of the box</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">Policy enforcement & audit</td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-exclamation-triangle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">REST API & extensibility</td>
                  <td><i className="bi bi-exclamation-triangle-fill"></i></td>
                  <td><i className="bi bi-exclamation-triangle-fill"></i></td>
                  <td><i className="bi bi-exclamation-triangle-fill"></i></td>
                  <td><i className="bi bi-question-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
                <tr>
                  <td className="table__stretch">Hosted / On-premise options</td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                  <td><i className="bi bi-x-circle-fill"></i></td>
                  <td><i className="bi bi-check-circle-fill"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row" style={{marginTop: '5rem'}}>
          <div className="col col--12">
            <div className="text--center">
              <Link
                className="button button--primary button--lg"
                to="mailto:support@kublade.org">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
