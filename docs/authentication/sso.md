---
sidebar_position: 2
---

# Single-Sign-On (SSO)

Kublade supports Single-Sign-On (SSO) through various social providers, allowing users to authenticate using their existing social media accounts. This guide explains how to configure and use SSO in your Kublade instance.

## Prerequisites

- A Kublade instance with user management enabled
- Valid accounts with the social providers you want to use
- Matching email addresses between social accounts and Kublade user accounts

## Configuration

### Environment Variables

To enable SSO, you need to configure the following environment variables in your `.env` file:

```env
# GitHub Configuration
GITHUB_ENABLED=false
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# GitLab Configuration
GITLAB_ENABLED=false
GITLAB_CLIENT_ID=
GITLAB_CLIENT_SECRET=

# Bitbucket Configuration
BITBUCKET_ENABLED=false
BITBUCKET_CLIENT_ID=
BITBUCKET_CLIENT_SECRET=

# Google Configuration
GOOGLE_ENABLED=false
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Azure Configuration
AZURE_ENABLED=false
AZURE_CLIENT_ID=
AZURE_CLIENT_SECRET=
AZURE_TENANT_ID=
AZURE_PROXY=

# Slack Configuration
SLACK_ENABLED=false
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
```

### Setting Up Social Providers

For each provider you want to enable, follow these steps:

1. **Create OAuth Application**
   - Go to the provider's developer portal
   - Create a new OAuth application
   - Set the callback URL to: `https://your-kublade-domain/auth/{provider}/callback`
   - Copy the Client ID and Client Secret

2. **Configure Environment Variables**
   - Set `{PROVIDER}_ENABLED=true`
   - Add the Client ID and Client Secret
   - For Azure, also configure the Tenant ID and Proxy if needed

## Usage

### User Requirements

Important: For SSO to work, the following conditions must be met:

1. The user must already exist in the Kublade system
2. The email address used in the social provider account must match the email address in the Kublade user account
3. The social provider must be properly configured and enabled

### Login Process

1. Click the "Login with {'{'}Provider{'}'}" button on the login page
2. You will be redirected to the provider's login page
3. After successful authentication, you will be redirected back to Kublade
4. If the email addresses match, you will be automatically logged in

## Troubleshooting

Common issues and solutions:

1. **Login Fails**
   - Verify that the user exists in Kublade
   - Check if email addresses match exactly
   - Ensure the social provider is properly configured
   - Check the application logs for detailed error messages

2. **Provider Not Available**
   - Verify that the provider is enabled in the `.env` file
   - Check if all required credentials are set
   - Ensure the callback URL is correctly configured in the provider's settings

## Security Considerations

- Keep your Client Secrets secure and never commit them to version control
- Regularly rotate your OAuth credentials
- Monitor login attempts and implement rate limiting if necessary
- Consider implementing additional security measures like IP restrictions

