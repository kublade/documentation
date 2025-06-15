# Create

This guide explains how to add a Kubernetes cluster to Kublade. Note that Kublade does not create Kubernetes clusters - it manages existing clusters. You need to have a running Kubernetes cluster with the necessary access before proceeding.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Before adding a cluster to Kublade, ensure you have:

1. **Kubernetes Cluster Access**

   * A running Kubernetes cluster
   * Valid kubeconfig file
   * Service account token with appropriate permissions
   * API server URL
   * Access to the cAdvisor metrics endpoint

2. **Git Repository**

   * A Git repository for storing cluster manifests
   * Repository URL
   * Branch name
   * Git credentials (username/password or token)
   * Git user email
   * Base path for cluster manifests

## Cluster Configuration[​](#cluster-configuration "Direct link to Cluster Configuration")

When adding a cluster, you need to provide the following information:

### Basic Information[​](#basic-information "Direct link to Basic Information")

* `name`: A unique name for the cluster
* `project`: The project this cluster belongs to

### Git Configuration[​](#git-configuration "Direct link to Git Configuration")

* `git.url`: Repository URL (e.g., <https://git.example.com/org/cluster-manifests.git>)
* `git.branch`: Branch name (e.g., main)
* `git.credentials`: Git token or password
* `git.username`: Git username
* `git.email`: Git user email
* `git.base_path`: Path where manifests will be stored (e.g., clusters/production)

### Kubernetes Configuration[​](#kubernetes-configuration "Direct link to Kubernetes Configuration")

* `k8s.api_url`: Kubernetes API server URL (e.g., <https://kubernetes.example.com:6443>)
* `k8s.kubeconfig`: Valid kubeconfig file content
* `k8s.service_account_token`: Service account token with appropriate permissions
* `k8s.node_prefix`: Optional prefix for node names (e.g., prod-)

### Namespace Configuration[​](#namespace-configuration "Direct link to Namespace Configuration")

* `namespace.utility`: Namespace for utility services (e.g., kublade-utility)
* `namespace.ingress`: Namespace for ingress controllers (e.g., kublade-ingress)

## Cluster Monitoring[​](#cluster-monitoring "Direct link to Cluster Monitoring")

Kublade automatically sets up monitoring for your cluster. The system:

1. **Status Monitoring**

   * Tracks cluster health
   * Monitors node status
   * Reports cluster availability
   * Updates cluster status in real-time

2. **Resource Monitoring**

   * Tracks CPU usage
   * Monitors memory consumption
   * Measures storage utilization
   * Counts pod usage
   * Calculates resource utilization percentages

### Monitoring Requirements[​](#monitoring-requirements "Direct link to Monitoring Requirements")

For proper monitoring, ensure your cluster has:

1. **Metrics Server**

   * Deployed and running
   * Accessible via the API server
   * Properly configured

2. **cAdvisor**

   * Enabled on nodes
   * Accessible via the metrics endpoint
   * Proper permissions set

3. **Resource Quotas**

   * Defined for namespaces
   * Proper limits set
   * Monitoring enabled

## Adding a Cluster[​](#adding-a-cluster "Direct link to Adding a Cluster")

1. **Navigate to Project**

   * Go to your project
   * Click "Add Cluster"

2. **Provide Basic Information**

   * Enter cluster name
   * Select project

3. **Configure Git Access**

   * Enter repository URL
   * Specify branch
   * Provide credentials
   * Set Git user information
   * Define base path

4. **Configure Kubernetes Access**

   * Enter API server URL
   * Upload or paste kubeconfig
   * Provide service account token
   * Set node prefix (optional)

5. **Configure Namespaces**

   * Set utility namespace
   * Set ingress namespace

6. **Verify Configuration**

   * Review all settings
   * Test connections
   * Validate permissions

## Post-Creation[​](#post-creation "Direct link to Post-Creation")

After adding a cluster, Kublade will:

1. **Initialize Monitoring**

   * Set up status monitoring
   * Configure resource monitoring
   * Start collecting metrics

2. **Create Namespaces**

   * Create utility namespace
   * Create ingress namespace
   * Set up initial resources

3. **Verify Access**

   * Test Git access
   * Validate Kubernetes connection
   * Check monitoring setup

## Best Practices[​](#best-practices "Direct link to Best Practices")

1. **Security**

   * Use service accounts with minimal required permissions
   * Store credentials securely
   * Regularly rotate tokens
   * Use HTTPS for Git repositories
   * Implement proper RBAC rules
   * Use network policies for isolation
   * Enable audit logging
   * Monitor access patterns

2. **Monitoring**

   * Ensure metrics server is properly configured
   * Set up appropriate resource quotas
   * Monitor cluster health regularly
   * Set up alerts for critical metrics
   * Configure proper retention periods
   * Set up dashboards for visualization
   * Monitor node health
   * Track resource utilization

3. **Organization**

   * Use meaningful cluster names
   * Organize Git repositories logically
   * Follow consistent naming conventions
   * Document cluster configuration
   * Maintain clear resource boundaries
   * Use proper labeling
   * Implement proper tagging
   * Keep documentation updated

4. **Maintenance**

   * Regularly update credentials
   * Monitor resource usage
   * Review and update quotas
   * Keep documentation current
   * Perform regular health checks
   * Update monitoring configurations
   * Review security settings
   * Clean up unused resources

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### Common Issues[​](#common-issues "Direct link to Common Issues")

1. **Connection Problems**

   * Verify API server URL
   * Check kubeconfig validity
   * Validate service account token
   * Ensure network connectivity

2. **Git Access Issues**

   * Verify repository URL
   * Check credentials
   * Validate branch existence
   * Test repository access

3. **Monitoring Problems**

   * Check metrics server status
   * Verify cAdvisor access
   * Validate service account permissions
   * Review resource quotas

4. **Namespace Issues**

   * Check namespace existence
   * Verify namespace permissions
   * Validate resource quotas
   * Review namespace policies
