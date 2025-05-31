---
sidebar_position: 2
---

# Synchronize from Git repository

This guide explains how to create templates by synchronizing them from a Git repository. The system supports both public and private Git repositories, allowing you to maintain your templates in version control.

## Required Parameters

To synchronize a template from a Git repository, you need to provide the following parameters:

### Basic Information
- `name`: A unique name for the template

### Git Configuration
- `git.url`: Repository URL (e.g., https://github.com/org/template-repo.git)
- `git.branch`: Branch name (e.g., main)
- `git.credentials`: Git token or password (for private repositories)
- `git.username`: Git username (for private repositories)
- `git.email`: Git user email (for private repositories)
- `git.base_path`: Path where templates are stored (e.g., templates/)

## Repository Structure

Your Git repository should follow this structure. You can find a complete example in our [template repository](https://github.com/kublade/template-repository):

```
repository/
├── .kublade/              # Kublade-specific configuration
│   ├── fields.json        # Field configuration
│   └── ports.json         # Port configuration
├── kustomization.yaml     # Kustomize configuration
├── namespace.yaml         # Namespace definition
├── deployment.yaml        # Deployment manifest
├── service.yaml          # Service manifest
└── other-resources/      # Additional resources
    ├── configmap.yaml
    └── secret.yaml
```

### Field Configuration

The `.kublade/fields.json` file defines the input fields that will be available in the template. Each field has specific properties:

```json
[
  {
    "type": "input_text",
    "key": "text_example",
    "label": "Text Example",
    "value": "example",
    "required": true,
    "secret": false,
    "set_on_create": true,
    "set_on_update": false
  },
  {
    "type": "textarea",
    "key": "textarea_example",
    "label": "Textarea Example",
    "value": null,
    "required": true,
    "secret": false,
    "set_on_create": false,
    "set_on_update": true
  },
  {
    "type": "input_number",
    "key": "number_example",
    "label": "Number Example",
    "value": 20,
    "min": 10,
    "max": 100,
    "step": 10,
    "required": true,
    "secret": true,
    "set_on_create": true,
    "set_on_update": true
  },
  {
    "type": "input_range",
    "key": "range_example",
    "label": "Range Example",
    "value": 5,
    "min": 1,
    "max": 10,
    "step": 1,
    "required": false,
    "secret": false,
    "set_on_create": true,
    "set_on_update": true
  },
  {
    "type": "input_radio",
    "key": "radio_example",
    "label": "Radio Example",
    "value": null,
    "options": [
      { "label": "Option 1", "value": "option1", "default": true },
      { "label": "Option 2", "value": "option2", "default": false }
    ],
    "required": false,
    "secret": false,
    "set_on_create": true,
    "set_on_update": true
  },
  {
    "type": "input_radio_image",
    "key": "radio_image_example",
    "label": "Radio Image Example",
    "value": null,
    "options": [
      { "label": "https://placehold.co/600x400", "value": "option1", "default": true },
      { "label": "https://placehold.co/400x600", "value": "option2", "default": false }
    ],
    "required": false,
    "secret": false,
    "set_on_create": true,
    "set_on_update": true
  },
  {
    "type": "select",
    "key": "select_example",
    "label": "Select Example",
    "value": null,
    "options": [
      { "label": "Option 1", "value": "option1", "default": false },
      { "label": "Option 2", "value": "option2", "default": true }
    ],
    "required": false,
    "secret": false,
    "set_on_create": true,
    "set_on_update": true
  },
  {
    "type": "input_checkbox",
    "key": "checkbox_example",
    "label": "Checkbox Example",
    "value": "example",
    "required": true,
    "secret": false,
    "set_on_create": true,
    "set_on_update": true
  }
]
```

#### Field Types and Properties

1. **Common Properties**
   - `type`: The type of input field
   - `key`: Unique identifier for the field
   - `label`: Display name for the field
   - `value`: Default value
   - `required`: Whether the field is mandatory
   - `secret`: Whether the field contains sensitive data
   - `set_on_create`: Whether the field can be set during creation
   - `set_on_update`: Whether the field can be updated after creation

2. **Available Field Types**
   - `input_text`: Single-line text input
   - `textarea`: Multi-line text input
   - `input_number`: Numeric input with min/max/step
   - `input_range`: Slider input with min/max/step
   - `input_radio`: Radio button group
   - `input_radio_image`: Radio buttons with images
   - `select`: Dropdown selection
   - `input_checkbox`: Checkbox input

### Port Configuration

The `.kublade/ports.json` file defines the port claims for your template:

```json
[
  {
    "group": "k8s-test",
    "claim": "httpExample",
    "preferred_port": 8080,
    "random": true
  },
  {
    "group": "k8s-test",
    "claim": "httpsExample",
    "preferred_port": 8443,
    "random": true
  }
]
```

#### Port Properties

1. **Common Properties**
   - `group`: The port group (e.g., "k8s-test")
   - `claim`: Unique identifier for the port claim
   - `preferred_port`: The preferred port number
   - `random`: Whether a random port should be used if the preferred port is unavailable

## Template Rendering

For detailed information about templating your Kubernetes manifests, including variable usage, conditional logic, and port management, refer to:
- [Blade Templating Guide](use_blade.md): Learn how to use the Blade templating engine for dynamic manifest generation
- [Port Management Guide](use_ports.md): Understand how to manage port claims and reservations

## Synchronization Process

When synchronizing a template, the system will:

1. Clone the specified repository
2. Read the template contents
3. Validate the template structure
4. Make the template available for use
5. Periodically check for updates
