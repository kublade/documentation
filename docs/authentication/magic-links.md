---
sidebar_position: 3
---

# Magic Links

Kublade supports password-less authentication through magic links, allowing users to log in securely without passwords. Magic links are automatically generated and can be used within automations or sent via email when requested.

## How It Works

1. **Generate Magic Link**: Use the API endpoint to create a magic link for a user
2. **One-Click Login**: User clicks the link and is instantly logged in and redirected to the dashboard
3. **Automatic Expiry**: Links expire after a set time for security

## User Experience

When a magic link is generated:

1. Clicking the link automatically logs the user in
2. They're redirected to the specified dashboard URL
3. The link becomes invalid after use or expiry

## Security Features

- **Time-limited**: Links expire automatically (default: 24 hours)
- **Single-use**: Each link can only be used once
- **Secure tokens**: Cryptographically signed and user-specific

## API Documentation

For complete API documentation, visit the [OpenAPI specification](https://kublade.org/api/#tag/Users) where all endpoints are documented.
