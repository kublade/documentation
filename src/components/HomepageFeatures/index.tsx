import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: 'bi bi-file-code',
    title: 'Blade-Powered Templating',
    description: (
      <>
        Leverage the power of the Blade templating engine to create reusable Kubernetes manifest templates. With Kublade, you can use familiar directives, components, and inheritance patterns to build modular and maintainable Kubernetes configurations.
      </>
    ),
  },
  {
    icon: 'bi bi-download',
    title: 'Automatic Template Import',
    description: (
      <>
        Import templates from a Git repository, Helm repository, or create them directly within the web editor. Kublade will automatically parse the templates and make them available for use in your project.
      </>
    ),
  },
  {
    icon: 'bi bi-input-cursor',
    title: 'Advanced Autocompletion',
    description: (
      <>
        Break free from the constraints of traditional editors with advanced autocompletion. Kublade provides intelligent suggestions and context-aware completions, helping you to write manifests faster and more accurately.
      </>
    ),
  },
  {
    icon: 'bi bi-person-workspace',
    title: 'Single-Sign-On (SSO)',
    description: (
      <>
        Simplify your authentication process with Kublade's Single-Sign-On (SSO) support. Kublade integrates with popular SSO providers like GitHub, GitLab, Google, and Azure AD, allowing you to provide simple and secure access to your resources.
      </>
    ),
  },
  {
    icon: 'bi bi-git',
    title: 'GitOps Integration',
    description: (
      <>
        Seamlessly integrate with GitOps workflows by automatically committing and pushing your Kubernetes manifests to Git repositories. Kublade works perfectly with tools like ArgoCD and Flux, enabling continuous deployment and version control of your infrastructure.
      </>
    ),
  },
  {
    icon: 'bi bi-diagram-3',
    title: 'Cluster Management',
    description: (
      <>
        Efficiently manage multiple Kubernetes clusters from a single interface. Kublade provides comprehensive cluster management capabilities, including resource monitoring, and automated health checks.
      </>
    ),
  },
  {
    icon: 'bi bi-plug',
    title: 'REST API',
    description: (
      <>
        Utilize a modern REST API to keep control of your deployments programmatically. Kublade provides a simple interface that allows you to manage your Kubernetes resources. This is useful for integrating with other tools and systems, or for automating your deployments.
      </>
    ),
  },
  {
    icon: 'bi bi-shield-lock',
    title: 'Granular Permissions',
    description: (
      <>
        Control access to your Kubernetes resources with fine-grained role-based permissions. Kublade provides a comprehensive permission system that allows you to define custom roles, assign them to users, and restrict access based on them - ensuring secure and controlled access to your resources.
      </>
    ),
  },
  {
    icon: 'bi bi-file-earmark-text',
    title: 'Manifest Previews',
    description: (
      <>
        Preview your Kubernetes manifests before applying them to your cluster. Kublade provides a built-in preview functionality that lets you validate and review the final rendered manifests, ensuring your configurations are correct and match your expectations before deployment.
      </>
    ),
  },
  {
    icon: 'bi bi-clock-history',
    title: 'Configuration History',
    description: (
      <>
        Keep track of your deployment configuration. Kublade maintains a complete history of your manifest templates and configurations, allowing you to review and understand changes, as well as rollback to previous states if needed.
      </>
    ),
  },
  {
    icon: 'bi bi-bar-chart-line',
    title: 'Resource Metrics',
    description: (
      <>
        Gain deep insights into your deployments with comprehensive metrics tracking. Kublade provides detailed resource analytics that help you to understand your deployment patterns and identify potential areas for optimization.
      </>
    ),
  },
  {
    icon: 'bi bi-terminal',
    title: 'Logstream Analytics',
    description: (
      <>
        Access and visualize logs from your Kubernetes pods with an intuitive interface. Kublade provides real-time log streaming, advanced filtering capabilities, and a powerful search functionality that helps you quickly identify and troubleshoot issues across your cluster's workloads.
      </>
    ),
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Network Policies',
    description: (
      <>
        Simplify and secure inter-service communication with Kublade's network policy management. Create and manage Kubernetes NetworkPolicies that enable controlled communication between deployments across namespaces, while maintaining security best practices.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-top--md padding-bottom-md">
        <i className={`${icon} featureIcon ${styles.icon}`}></i>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageReasons(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.headline)}>
          <div className="col--8 text--center">
            <h2 className="text--primary text--normal">The ultimate DevOps companion</h2>
            <p>Discover the features that will help you to deploy your Kubernetes applications faster and more efficiently.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
