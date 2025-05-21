---
sidebar_position: 6
---

# Roles and permissions

This guide explains how roles and permissions work in the system. The permission system is designed to provide fine-grained access control for all resources.

## Permission Structure

Permissions are organized in a hierarchical structure using dot notation. Each permission represents access to a specific resource or action. The system supports both UI and API permissions.

### Permission Format

```
[resource].[id].[action]
```

Where:
- `resource`: The resource type (e.g., projects, templates, deployments)
- `id`: (Optional) Specific resource ID or `*` for all resources
- `action`: The specific action (e.g., view, create, update, delete)

### Resource Types

The system supports the following resource types:
- `projects`: Project management
- `templates`: Template management
- `folders`: Template directory management
- `files`: Template file management
- `fields`: Template field management
- `options`: Template field options
- `ports`: Port claim management
- `clusters`: Cluster management
- `deployments`: Deployment management
- `commits`: Deployment commit management
- `network-policies`: Network policy management

## Permission Guard

The system uses middleware to enforce permissions:

### UI Permissions
The `PermissionGuard` middleware (`app/Http/Middleware/PermissionGuard.php`) handles UI permissions. It:
- Intercepts web requests
- Validates user permissions
- Translates permission names for display
- Handles permission inheritance

### API Permissions
The `API\PermissionGuard` middleware (`app/Http/Middleware/API/PermissionGuard.php`) handles API permissions. It:
- Intercepts API requests
- Validates API tokens and permissions
- Enforces API-specific permission rules
- Handles API permission inheritance

## Permission Management

### Syncing Permissions

Permissions are automatically synced from route definitions. To manually sync permissions:

```bash
php artisan app:sync-permissions
```

This command:
1. Scans all routes for permission middleware
2. Extracts permission definitions
3. Creates or updates permission records
4. Removes obsolete permissions

### Permission Translation

The system automatically translates permission names for better readability. For example:
- `projects.0fa0043b-6134-4f4b-a243-6b354605daa9.view` becomes `projects.my-project.view`
- `templates.11eb2826-a128-4600-b98c-2a50edfc8615.update` becomes `templates.my-template.update`

## Role Management

Roles are collections of permissions that can be assigned to users. The system supports:

### Built-in Roles
- `admin`: Full system access
- `user`: Basic user access
- `viewer`: Read-only access

### Custom Roles
You can create custom roles with specific permission sets for different use cases.

## Permission Inheritance

The system implements permission inheritance through wildcards:

```
projects.*.view    # View all projects
templates.*.edit   # Edit all templates
deployments.*      # All actions on all deployments
```

## Best Practices

1. **Principle of Least Privilege**
   - Assign only necessary permissions
   - Use specific resource IDs when possible
   - Avoid wildcard permissions unless required

2. **Role Design**
   - Create roles based on job functions
   - Use meaningful role names
   - Document role purposes and permissions

3. **Permission Organization**
   - Group related permissions
   - Use consistent naming conventions
   - Document permission purposes

4. **Security**
   - Regularly review permissions
   - Remove unused permissions
   - Audit permission changes

## Examples

### Basic Permission Examples

```php
// UI Permissions
'projects.view'                                            // View projects list via GUI or API
'templates.create'                                         // Create new templates via GUI or API
'deployments.b1c7ef32-f846-47a2-bdaf-62fdce11b170.edit'    // Edit specific deployment via GUI or API
```

### Role Definition Example

```php
// Admin Role
[
    '*',                // All permissions
]

// Template Manager Role
[
    'templates.*',   // All template management
]

// Project Manager Role
[
    'projects.*',    // View all projects
]
```

## API Permissions

API permissions follow the same structure but with additional security measures:

1. **Token Validation**
   - API tokens are required
   - Tokens are associated with specific permissions
   - Tokens can be scoped to specific resources

2. **Rate Limiting**
   - API requests are rate-limited
   - Limits are configurable per permission
   - Limits can be customized per role

3. **Audit Logging**
   - All API permission checks are logged
   - Failed attempts are recorded
   - Success patterns are monitored

## Troubleshooting

Common permission issues and solutions:

1. **Permission Denied**
   - Check user role assignments
   - Verify permission inheritance
   - Review resource-specific permissions

2. **API Access Issues**
   - Validate API token
   - Check token permissions
   - Verify rate limits

3. **Permission Sync Problems**
   - Run permission sync command
   - Check route definitions
   - Verify middleware configuration
