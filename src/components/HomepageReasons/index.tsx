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
    icon: 'bi bi-kanban-fill',
    title: 'Consistent, Policy-Driven Cluster Configuration',
    contentPosition: 'left',
    description: (
      <>
        With Kublade's powerful templating engine, you define a single source of truth for your Kubernetes resources - namespaces, RBAC rules, network policies and more - in reusable templates. This enforces uniform security and compliance standards across all environments automatically, eliminating drift and manual misconfigurations. Every team's deployment inherits the same vetted blueprint, so audits become trivial, onboarding is faster, and you can rest assured that every pod and service adheres to your organization's governance from Day One.
      </>
    ),
  },
  {
    icon: 'bi bi-lightning-charge-fill',
    title: 'Rapid Environment Provisioning & Iteration',
    contentPosition: 'right',
    description: (
      <>
        Stop rebuilding YAML by hand for each microservice or feature spike. Kublade templates let you spin up entire application stacks - Ingress, ConfigMaps, Deployments, and Services - in seconds by simply injecting environment-specific parameters. Need a QA cluster for a new feature branch? Hit "apply" on the template with a new namespace name and your environment is live. This lightning-fast workflow accelerates testing, shortens feedback loops, and empowers developers to experiment boldly - without worrying about tedious boilerplate or manual merge conflicts.
      </>
    ),
  },
  {
    icon: 'bi bi-robot',
    title: 'Context-Aware AI Chat',
    contentPosition: 'left',
    description: (
      <>
        Leverage the power of AI to streamline your Kubernetes operations. Our context-aware AI chat assistant understands your cluster's state, configuration templates, and deployment history, providing intelligent suggestions and automated solutions. Whether you're troubleshooting deployment issues, seeking best practices for resource optimization, or need help with template modifications, the AI assistant offers real-time guidance tailored to your specific infrastructure context. This intelligent interface reduces cognitive load, accelerates problem resolution, and helps teams maintain consistent operational excellence across all environments.
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

export default function HomepageFeatures(): ReactNode {
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
