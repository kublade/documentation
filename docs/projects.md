# Projects

Projects are organizational units that group clusters and deployments together. They serve as a way to organize resources and manage permissions at a higher level.

## Project Structure[​](#project-structure "Direct link to Project Structure")

A project consists of:

* Clusters: Kubernetes clusters where deployments run
* Deployments: Application deployments managed by the project
* Network Policies: Rules defining how deployments can communicate
* Members: Users with specific permissions for the project

## Project Organization[​](#project-organization "Direct link to Project Organization")

### Resource Hierarchy[​](#resource-hierarchy "Direct link to Resource Hierarchy")

```
Project
├── Clusters
│   ├── Cluster 1
│   └── Cluster 2
├── Deployments
│   ├── Deployment 1
│   ├── Deployment 2
│   └── Network Policies
└── Members
    ├── User 1 (Project Manager)
    ├── User 2 (Deployment Manager)
    └── User 3 (Viewer)
```

### Resource Management[​](#resource-management "Direct link to Resource Management")

* Templates are managed globally and can be used across projects
* Clusters are assigned to specific projects
* Deployments are always associated with a project
* Network policies are scoped to project deployments

## Project Permissions[​](#project-permissions "Direct link to Project Permissions")

Projects use a granular permission system to control access to resources:

### Permission Structure[​](#permission-structure "Direct link to Permission Structure")

```
projects.[project_id].[action]
```

Where:

* `project_id`: The specific project UUID
* `action`: The allowed action (view, create, update, delete)

### Common Permission Patterns[​](#common-permission-patterns "Direct link to Common Permission Patterns")

```
projects.*                    # All actions on all projects
projects.[id].*              # All actions on specific project
projects.[id].view           # View specific project
projects.[id].deployments.*  # Manage deployments in project
```

### Role Examples[​](#role-examples "Direct link to Role Examples")

1. **Project Manager**

   ```
   [
       'projects.[id].*',              // Full project access
       'projects.[id].deployments.*',  // Manage all deployments
       'projects.[id].clusters.*',     // Manage all clusters
       'projects.[id].network-policies.*' // Manage network policies
   ]
   ```

2. **Deployment Manager**

   ```
   [
       'projects.[id].view',           // View project details
       'projects.[id].deployments.*',  // Manage deployments
       'projects.[id].network-policies.*' // Manage network policies
   ]
   ```

3. **Project Viewer**

   ```
   [
       'projects.[id].view',           // View project details
       'projects.[id].deployments.view', // View deployments
       'projects.[id].clusters.view'    // View clusters
   ]
   ```

## Project Management[​](#project-management "Direct link to Project Management")

### Creating Projects[​](#creating-projects "Direct link to Creating Projects")

1. Navigate to the projects page

2. Click "Create Project"

3. Provide:

   <!-- -->

   * Project name
   * Description

### Managing Clusters[​](#managing-clusters "Direct link to Managing Clusters")

1. Add clusters to the project
2. Configure cluster access
3. Set up cluster-specific settings
4. Manage cluster resources

### Managing Deployments[​](#managing-deployments "Direct link to Managing Deployments")

1. Create deployments within the project
2. Assign deployments to clusters
3. Configure deployment settings
4. Manage deployment lifecycle

### Network Policies[​](#network-policies "Direct link to Network Policies")

1. Define allowed communication paths
2. Set up ingress/egress rules
3. Configure network isolation
4. Manage policy updates

## Best Practices[​](#best-practices "Direct link to Best Practices")

1. **Project Organization**

   * Use meaningful project names
   * Group related deployments
   * Document project purpose
   * Maintain clear resource boundaries

2. **Permission Management**

   * Follow principle of least privilege
   * Regularly review permissions
   * Document role responsibilities
   * Use specific permissions over wildcards

3. **Resource Management**

   * Monitor resource usage
   * Plan cluster capacity
   * Document deployment patterns
   * Maintain network policy documentation

4. **Security**

   * Regular security audits
   * Access review cycles
   * Network policy reviews
   * Compliance documentation

## Project Lifecycle[​](#project-lifecycle "Direct link to Project Lifecycle")

### Creation[​](#creation "Direct link to Creation")

1. Define project scope
2. Set up initial permissions
3. Configure clusters
4. Document project structure

### Maintenance[​](#maintenance "Direct link to Maintenance")

1. Regular permission reviews
2. Resource usage monitoring
3. Network policy updates
4. Documentation updates

### Cleanup[​](#cleanup "Direct link to Cleanup")

1. Archive unused deployments
2. Remove unused clusters
3. Update permissions
4. Document changes

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### Common Issues[​](#common-issues "Direct link to Common Issues")

1. **Permission Problems**

   * Verify user role assignments
   * Check project-specific permissions
   * Review permission inheritance
   * Validate resource access

2. **Resource Access**

   * Confirm cluster connectivity
   * Verify deployment permissions
   * Check network policy rules
   * Validate resource quotas

3. **Network Issues**

   * Review network policies
   * Check cluster connectivity
   * Verify service mesh configuration
   * Validate DNS settings
