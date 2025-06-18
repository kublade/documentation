import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  contentPosition: 'left' | 'right';
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: 'bi bi-hourglass-split',
    title: 'Eliminate Manual Configuration Overhead',
    contentPosition: 'left',
    description: (
      <>
        Managing Kubernetes manifests at scale is a constant battle against YAML sprawl, inconsistent practices, and error-prone manual edits. While tools like Helm and Kustomize offer powerful templating, they can't enforce standardization across teams or prevent configuration drift. Developers need a friendly interface to preview GitOps changes and ensure compliance with security policies - before pushing to production. As audit requirements grow stricter, tracking who changed what and when becomes critical. Kublade provides a centralized platform to define, validate and version your deployment templates, making it easy to enforce best practices and maintain compliance without slowing down development.
      </>
    ),
  },
  {
    icon: 'bi bi-ui-checks-grid',
    title: 'Standardize and Automate Your Deployments',
    contentPosition: 'right',
    description: (
      <>
        Kublade streamlines Kubernetes deployments through validated manifest templates that enforce security and compliance guardrails. The GitOps-native workflow integrates AI assistance to help developers author and review changes confidently, while built-in RBAC controls and SSO ensure proper access management. A comprehensive REST API enables automation and integration with existing tools and processes. Every configuration change is tracked with detailed audit logs, giving you complete visibility into your infrastructure as code journey. By combining powerful templating with enterprise-grade controls, Kublade helps teams standardize deployments while maintaining the flexibility to innovate.
      </>
    ),
  },
];

function Feature({title, description, icon, contentPosition}: FeatureItem) {
  return (
    <div className={clsx('row', contentPosition === 'right' ? styles.reverse : styles.regular)}>
      <div className="col col--5">
        <div className={styles.iconized}>
          <div className={styles.iconContainer}></div>
          <i className={`featureIcon ${icon} ${styles.icon}`}></i>
        </div>
      </div>
      <div className={clsx('col col--7', styles.content)}>
        <div className="padding--lg">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyReasons(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featuresContainer)}>
        {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
