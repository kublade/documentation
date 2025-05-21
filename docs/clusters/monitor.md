---
sidebar_position: 2
---

# Monitoring

Kublade provides comprehensive monitoring capabilities for your Kubernetes clusters, automatically collecting and aggregating metrics at multiple levels. The monitoring system is designed to provide real-time insights into cluster health, resource usage, and performance.

## Monitoring Levels

The system monitors resources at different levels:

### Global Level
- Overall system health
- Cross-cluster resource utilization
- Global alert status
- System-wide metrics aggregation
- Performance trends across all clusters

### Project Level
- Project-wide resource usage
- Aggregated cluster metrics
- Project-specific alerts
- Resource allocation across clusters
- Project health status

### Cluster Level
- Cluster health status
- Node status and metrics
- Resource utilization
- Network performance
- Storage capacity
- Pod distribution

### Node Level
- CPU usage and allocation
- Memory consumption
- Storage utilization
- Network I/O
- Pod count and status
- System load

## Automated Monitoring

Kublade automatically sets up and maintains monitoring through several components:

### Status Monitoring
- `StatusMonitoring` job runs periodically
- Tracks cluster availability
- Monitors node health
- Updates cluster status
- Reports real-time health

### Resource Monitoring
- `LimitMonitoring` job collects metrics
- Tracks CPU utilization
- Monitors memory usage
- Measures storage consumption
- Counts pod usage
- Calculates resource percentages

### Metrics Collection
- Collects node metrics via cAdvisor
- Aggregates cluster-level metrics
- Tracks resource quotas
- Monitors namespace usage
- Records historical data

## Status Aggregation

The system uses boolean values to track health status at different levels:

### Cluster Status
- `true`: Cluster is healthy and operational
- `false`: Cluster is unhealthy or unreachable

### Node Status
- `true`: Node is healthy and operational
- `false`: Node is unhealthy or unreachable

### Health Aggregation
- Cluster health is determined by the health of its nodes
- Project health is determined by the health of its clusters
- Global health is determined by the health of all clusters
- A single unhealthy component will set the parent's health to `false`

## Alert System

Kublade implements a comprehensive alert system:

### Alert Levels
- `info`: Informational alerts
- `warning`: Potential issues
- `critical`: Immediate attention needed

### Alert Types
- `cluster`: Cluster-related alerts
- `node`: Node-specific alerts
- `resource`: Resource usage alerts
- `network`: Network-related alerts
- `storage`: Storage capacity alerts

### Alert Triggers
- Resource thresholds exceeded
- Cluster status changes
- Node status changes
- Network issues detected
- Storage capacity warnings

## Metrics and Dashboards

### Available Metrics
- CPU utilization per node/cluster
- Memory usage and allocation
- Storage capacity and usage
- Network throughput and latency
- Pod count and distribution
- Resource quota utilization
- Node health status
- Cluster performance metrics

### Dashboard Views
- Global system overview
- Project-level dashboards
- Cluster-specific views
- Node detail pages
- Resource utilization graphs
- Historical trend analysis
- Alert status overview
- Performance metrics

## Best Practices

1. **Monitoring Setup**
   - Configure appropriate thresholds
   - Set up meaningful alerts
   - Define clear escalation paths
   - Regular review of metrics
   - Update monitoring rules

2. **Alert Management**
   - Define clear alert priorities
   - Set up proper notifications
   - Regular alert review
   - Update alert thresholds
   - Document alert procedures

3. **Resource Planning**
   - Monitor resource trends
   - Plan capacity upgrades
   - Track usage patterns
   - Optimize resource allocation
   - Regular capacity planning

## Troubleshooting

### Common Issues

1. **Monitoring Problems**
   - Check metrics server status
   - Verify cAdvisor access
   - Validate permissions
   - Review resource quotas
   - Check network connectivity

2. **Alert Issues**
   - Verify alert configuration
   - Check notification settings
   - Review alert thresholds
   - Validate alert delivery
   - Test alert triggers

3. **Metric Collection**
   - Verify data collection
   - Check storage capacity
   - Review retention policies
   - Validate metric accuracy
   - Monitor collection jobs

4. **Status Reporting**
   - Verify status updates
   - Check aggregation logic
   - Review status definitions
   - Validate status changes
   - Monitor status jobs
