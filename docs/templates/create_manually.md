---
sidebar_position: 1
---

# Create

This guide explains how to create application templates manually. Templates are used to generate Kubernetes manifests that can be deployed using GitOps tools like FluxCD or ArgoCD.

## Template Structure

A template consists of two main parts:

1. Template Configuration: Defines metadata, variables, and behavior
2. Kubernetes Manifests: The actual resources to be deployed

### Template Configuration

The template configuration is defined in a web UI that describes:
- Template metadata (name, description, version)
- Required variables
- Port claims
- Resource limits
- Optional Helm chart import settings

### Kubernetes Manifests

The actual Kubernetes manifests are written using [Blade templating](use_blade.md) to make them dynamic. These files are typically organized in a directory structure:

```
template/
├── config.yaml           # Template configuration
├── kustomization.yaml    # Kustomize configuration
├── namespace.yaml        # Namespace definition
├── deployment.yaml       # Deployment manifest
├── service.yaml         # Service manifest
└── other-resources/     # Additional resources
    ├── configmap.yaml
    └── secret.yaml
```

## Template Rendering Process

When a template is used to create a deployment, the following process occurs:

1. The template configuration is validated
2. Required variables are checked
3. Port claims are resolved (see [Port reservations](use_ports.md))
4. Each manifest file is processed using the Blade templating engine
5. The rendered manifests are organized according to the kustomization.yaml
6. The final output is committed to the Git repository

## Using Kustomize

The `kustomization.yaml` file is crucial for organizing and customizing the generated manifests. It allows you to:

- Reference all resources
- Set common labels and annotations
- Define namespace
- Apply patches and overlays
- Manage resource dependencies

Example:
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

# Set the namespace (usually auto-generated)
namespace: {{ $data['namespace'] }}

# Reference all resources
resources:
  - namespace.yaml
  - deployment.yaml
  - service.yaml
  - other-resources/configmap.yaml
  - other-resources/secret.yaml

# Common labels
commonLabels:
  app.kubernetes.io/name: {{ $data['app_name'] }}
  app.kubernetes.io/instance: {{ $data['instance'] }}

# Common annotations
commonAnnotations:
  description: "{{ $data['description'] }}"
```

## Creating Dynamic Manifests

### Basic Resource Definition

Using [Blade templating](use_blade.md), you can create dynamic manifests:

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ $data['app_name'] }}
  labels:
    app: {{ $data['app_name'] }}
spec:
  replicas: {{ $data['replicas'] ?? 1 }}
  selector:
    matchLabels:
      app: {{ $data['app_name'] }}
  template:
    metadata:
      labels:
        app: {{ $data['app_name'] }}
    spec:
      containers:
      - name: {{ $data['app_name'] }}
        image: {{ $data['image'] }}
        @if($limits['enabled'])
        resources:
          limits:
            cpu: {{ $limits['cpu'] }}
            memory: {{ $limits['memory'] }}
        @endif
        ports:
        - name: http
          containerPort: {{ $data['port'] ?? 80 }}
```

### Service Definition with Port Claims

Using [port reservations](use_ports.md):

```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ $data['app_name'] }}-service
spec:
  selector:
    app: {{ $data['app_name'] }}
  ports:
  - name: http
    port: {{ $portClaims['web'] }}
    targetPort: {{ $data['port'] ?? 80 }}
  @if(isset($portClaims['metrics']))
  - name: metrics
    port: {{ $portClaims['metrics'] }}
    targetPort: {{ $data['metrics_port'] ?? 9090 }}
  @endif
```

### Secret Management

```yaml
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: {{ $data['app_name'] }}-secrets
type: Opaque
data:
  @foreach($secret as $key => $value)
  {{ $key }}: {{ base64_encode($value) }}
  @endforeach
```

## GitOps Integration

The generated manifests can be used with any GitOps tool that supports Kubernetes manifests. Here are some common patterns:

### FluxCD

[FluxCD](https://fluxcd.io/) will automatically detect and apply the manifests in the Git repository. The `kustomization.yaml` helps FluxCD understand the resource hierarchy and dependencies. FluxCD is a set of continuous and progressive delivery solutions for Kubernetes that are open and extensible.

Key features that make it work well with our templates:
- Native support for Kustomize
- Automated manifest reconciliation
- Health assessment
- Dependency management
- [FluxCD Documentation](https://fluxcd.io/flux/guides/)

### ArgoCD

[ArgoCD](https://argoproj.github.io/cd/) can use the same manifests, with the `kustomization.yaml` helping to manage the application state and sync status. ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes.

Key features that make it work well with our templates:
- Declarative application management
- Automated sync policies
- Health status monitoring
- RBAC integration
- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)

Both tools can work with the same template structure, making your templates portable across different GitOps implementations.

## Best Practices

1. **Template Organization**
   - Keep related resources together
   - Use meaningful file names
   - Document all variables and their purposes
   - Include example configurations

2. **Variable Management**
   - Define clear variable names
   - Provide default values where appropriate
   - Document required variables
   - Use type hints in documentation

3. **Resource Management**
   - Use kustomize for common configurations
   - Keep resources modular and reusable
   - Document resource dependencies
   - Include health checks and probes

4. **Security**
   - Never hardcode sensitive information
   - Use secrets for sensitive data
   - Implement proper RBAC
   - Follow the principle of least privilege

5. **Maintenance**
   - Version your templates
   - Document changes
   - Include upgrade paths
   - Test with different configurations
