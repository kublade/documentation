---
sidebar_position: 4
---

# Port reservations

Port reservations allow you to dynamically assign and manage ports for your Kubernetes services. This guide explains how to use port claims in your templates.

## How Port Claims Work

Port claims are a way to dynamically assign ports to your services. When you define a port claim in your template, the system will:

1. Check if a port is already reserved for this claim
2. If not, generate a random port from the specified port group
3. Store the port reservation for future use
4. Make the assigned port available in your template via `$portClaims`

## Defining Port Claims

In your template, you can define port claims in the template configuration. Each port claim must specify:

- A unique claim name
- A port group (e.g., 'http', 'tcp', 'udp')

## Using Port Claims in Templates

### Basic Usage
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  ports:
  - name: http
    port: {{ $portClaims['web'] }}
    targetPort: 80
```

### Multiple Port Claims
```yaml
apiVersion: v1
kind: Service
metadata:
  name: monitoring-service
spec:
  ports:
  - name: metrics
    port: {{ $portClaims['metrics'] }}
    targetPort: 9090
  - name: health
    port: {{ $portClaims['health'] }}
    targetPort: 8080
```

### Conditional Port Usage
```yaml
apiVersion: v1
kind: Service
metadata:
  name: conditional-service
spec:
  ports:
  @if(isset($portClaims['optional']))
  - name: optional
    port: {{ $portClaims['optional'] }}
    targetPort: 3000
  @endif
  - name: required
    port: {{ $portClaims['required'] }}
    targetPort: 8080
```

## Port Groups

Port groups help organize and manage port assignments. Common port groups include:

- `http`: For HTTP/HTTPS services (typically 80-443)
- `tcp`: For general TCP services
- `udp`: For UDP services
- `custom`: For custom port ranges

## Best Practices

1. Use meaningful claim names that describe the service purpose
2. Group related ports together using appropriate port groups
3. Document port claims in your template documentation
4. Consider port conflicts when designing your services
5. Use conditional port claims for optional services
6. Always validate port availability in your templates

## Example Use Cases

### Web Application
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-app
spec:
  ports:
  - name: http
    port: {{ $portClaims['web'] }}
    targetPort: 80
  - name: https
    port: {{ $portClaims['https'] }}
    targetPort: 443
```

### Monitoring Stack
```yaml
apiVersion: v1
kind: Service
metadata:
  name: monitoring
spec:
  ports:
  - name: prometheus
    port: {{ $portClaims['prometheus'] }}
    targetPort: 9090
  - name: grafana
    port: {{ $portClaims['grafana'] }}
    targetPort: 3000
  - name: alertmanager
    port: {{ $portClaims['alertmanager'] }}
    targetPort: 9093
```
