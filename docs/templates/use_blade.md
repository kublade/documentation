---
sidebar_position: 3
---

# Blade templating

Blade templating allows you to create dynamic Kubernetes manifests by using variables and control structures. This guide explains how to use Blade templating effectively in your Kubernetes manifests.

## Available Variables

The following variables are available in your templates:

### Namespace
```yaml
{{ $namespace }}
```
Use this to inject the auto-generated application namespace into your template.

### Data Variables
```yaml
{{ $data['your_variable'] }}
```
Use this to access regular variables passed to your template.

### Secret Variables
```yaml
{{ $secret['your_secret'] }}
```
Use this to access secret variables. These will be automatically converted to Kubernetes secrets.

### Port Claims
```yaml
{{ $portClaims['your_port_claim'] }}
```
Access dynamically assigned port numbers for your services.

For detailed information about port claims and port management, see [Port reservations](./use_ports.md).

### Deployment Status
```yaml
{{ $paused ? 'true' : 'false' }}
```
Boolean value indicating whether the deployment is paused.

### Resource Limits
```yaml
{{ $limits['enabled'] }}  # 'true' or 'false'
{{ $limits['cpu'] }}     # CPU limit
{{ $limits['memory'] }}  # Memory limit
```
Access deployment resource limits.

## Examples

### Basic Variable Usage
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ $data['app_name'] }}
spec:
  replicas: {{ $data['replicas'] }}
  template:
    spec:
      containers:
      - name: {{ $data['container_name'] }}
        image: {{ $data['image'] }}
```

### Using Secrets
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database-url: {{ base64_encode($secret['database_url']) }}
  api-key: {{ base64_encode($secret['api_key']) }}
```

### Port Configuration
```yaml
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  ports:
  - port: {{ $portClaims['http'] }}
    targetPort: 80
```

### Conditional Resource Limits
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: app
        resources:
          @if($limits['enabled'])
          limits:
            cpu: {{ $limits['cpu'] }}
            memory: {{ $limits['memory'] }}
          @endif
```

### Pause Control
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  paused: {{ $paused ? 'true' : 'false' }}
```

## Control Structures

Blade supports various control structures that you can use in your templates:

### If Statements
```yaml
@if($data['feature_enabled'])
  # Your configuration here
@else
  # Alternative configuration
@endif
```

### Loops
```yaml
@foreach($data['volumes'] as $volume)
- name: {{ $volume['name'] }}
  mountPath: {{ $volume['path'] }}
@endforeach
```

## Best Practices

1. Always validate your variables before using them
2. Use meaningful variable names
3. Keep templates modular and reusable
4. Document your template variables
5. Use proper indentation in your YAML files
6. Test your templates with different variable combinations

## Further Reading

For more detailed information about Blade templating, including additional directives, components, and advanced features, please refer to the [official Laravel Blade documentation](https://laravel.com/docs/blade).
