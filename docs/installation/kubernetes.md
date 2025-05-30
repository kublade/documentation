---
sidebar_position: 3
---

# Kubernetes

This guide describes how to install and run Kublade on a Kubernetes cluster using Helm charts and Docker images.

## Prerequisites

Make sure you have completed all steps in the [Prerequisites](../prerequisites.md) section. Additionally, please ensure your environment meets the following requirements:

- **Kubernetes Cluster:** For deploying generated manifests
- **Helm:** For scaffolding the application

## Installation

### 1. Create the Environment Secret

Prepare a Kubernetes Secret containing your environment variables (from your `.env` file):

```bash
kubectl create secret generic kublade-env-secret --from-env-file=.env
```

### 2. Add the Helm Chart Repository

Add the Laravel Helm chart repository:

```bash
helm repo add renoki-co https://charts.renoki.org
helm repo update
```

### 3. Configure values YAML files

Create a `values-app.yaml` file for the Kublade app:

```yaml
app:
  image:
    repository: ghcr.io/kublade/kublade-app
    pullPolicy: Always
    tag: latest
  envSecretName: kublade-env-secret
```

Create a `values-worker.yaml` file for the Kublade worker (Horizon):

```yaml
app:
  image:
    repository: ghcr.io/kublade/kublade-worker
    pullPolicy: Always
    tag: latest
  command: php artisan horizon
  envSecretName: kublade-env-secret
```

Adjust the image repository and tag if you want to use a specific version.

### 4. Deploy Using Helm

Deploy the app and worker using Helm:

```bash
helm install kublade renoki-co/laravel -f values-app.yaml
helm install kublade-worker renoki-co/laravel-worker -f values-worker.yaml
```

### 5. Generate the Application Key

```bash
kubectl exec -it <app-pod-name> -- php artisan key:generate
```

### 6. Migrate Database

```bash
kubectl exec -it <app-pod-name> -- php artisan migrate --no-interaction --force
```

```bash
kubectl exec -it <app-pod-name> -- php artisan db:seed
```

### 7. Access the Application

Expose the application using a LoadBalancer service or use `kubectl port-forward` for local access.

#### Example for port-forwarding:

```bash
kubectl port-forward svc/<service-name> 8080:80
```
