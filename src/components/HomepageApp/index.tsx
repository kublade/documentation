import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageApp(): ReactNode {
  return (
    <section className={styles.app}>
      <div className="container my-5">
        <div className={clsx('row', styles.headline)}>
          <div className="col col--8 text--center">
            <h2 className="text--primary text--normal">Build Application Templates, Avoid Mistakes</h2>
            <p>Provide complex application templates with dynamic content, avoid repetitive work and make your application deployment faster and more reliable.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col--12">
            <div className="app__screenshot-container">
              <div className="app__screenshot-browserbar">
                <div className="app__screenshot-browserbar-button"></div>
                <div className="app__screenshot-browserbar-button"></div>
                <div className="app__screenshot-browserbar-button"></div>
              </div>
              <img src="/img/screenshots/editor.png" alt="Editor screenshot" className="app__screenshot" />
              <div className="app__screenshot-feature app__screenshot-feature--ai">
                AI Assistant with Agent Mode
              </div>
              <div className="app__screenshot-feature app__screenshot-feature--autocomplete">
                Intelligent Autocomplete
              </div>
              <div className="app__screenshot-feature app__screenshot-feature--content">
                Dynamic Content
              </div>
              <div className="app__screenshot-feature app__screenshot-feature--variable">
                Variable Support
              </div>
            </div>
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
