# Blade templating

Blade templating allows you to create dynamic Kubernetes manifests by using variables and control structures. This guide explains how to use Blade templating effectively in your Kubernetes manifests.

## Available Variables[​](#available-variables "Direct link to Available Variables")

The following variables are available in your templates:

### Namespace[​](#namespace "Direct link to Namespace")

```
{{ $namespace }}
```

Use this to inject the auto-generated application namespace into your template.

### Data Variables[​](#data-variables "Direct link to Data Variables")

```
{{ $data['your_variable'] }}
```

Use this to access regular variables passed to your template.

### Secret Variables[​](#secret-variables "Direct link to Secret Variables")

```
{{ $secret['your_secret'] }}
```

Use this to access secret variables. These will be automatically converted to Kubernetes secrets.

### Port Claims[​](#port-claims "Direct link to Port Claims")

```
{{ $portClaims['your_port_claim'] }}
```

Access dynamically assigned port numbers for your services.

For detailed information about port claims and port management, see [Port reservations](/docs/templates/use_ports.md).

### Deployment Status[​](#deployment-status "Direct link to Deployment Status")

```
{{ $paused ? 'true' : 'false' }}
```

Boolean value indicating whether the deployment is paused.

### Resource Limits[​](#resource-limits "Direct link to Resource Limits")

```
{{ $limits['enabled'] }}  # 'true' or 'false'
{{ $limits['cpu'] }}     # CPU limit
{{ $limits['memory'] }}  # Memory limit
```

Access deployment resource limits.

## Examples[​](#examples "Direct link to Examples")

### Basic Variable Usage[​](#basic-variable-usage "Direct link to Basic Variable Usage")

```
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

### Using Secrets[​](#using-secrets "Direct link to Using Secrets")

```
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database-url: {{ base64_encode($secret['database_url']) }}
  api-key: {{ base64_encode($secret['api_key']) }}
```

### Port Configuration[​](#port-configuration "Direct link to Port Configuration")

```
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  ports:
  - port: {{ $portClaims['http'] }}
    targetPort: 80
```

### Conditional Resource Limits[​](#conditional-resource-limits "Direct link to Conditional Resource Limits")

```
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

### Pause Control[​](#pause-control "Direct link to Pause Control")

```
apiVersion: apps/v1
kind: Deployment
spec:
  paused: {{ $paused ? 'true' : 'false' }}
```

## Control Structures[​](#control-structures "Direct link to Control Structures")

Blade supports various control structures that you can use in your templates:

### If Statements[​](#if-statements "Direct link to If Statements")

```
@if($data['feature_enabled'])
  # Your configuration here
@else
  # Alternative configuration
@endif
```

### Loops[​](#loops "Direct link to Loops")

```
@foreach($data['volumes'] as $volume)
- name: {{ $volume['name'] }}
  mountPath: {{ $volume['path'] }}
@endforeach
```

## Best Practices[​](#best-practices "Direct link to Best Practices")

1. Always validate your variables before using them
2. Use meaningful variable names
3. Keep templates modular and reusable
4. Document your template variables
5. Use proper indentation in your YAML files
6. Test your templates with different variable combinations

## Further Reading[​](#further-reading "Direct link to Further Reading")

For more detailed information about Blade templating, including additional directives, components, and advanced features, please refer to the [official Laravel Blade documentation](https://laravel.com/docs/blade).
