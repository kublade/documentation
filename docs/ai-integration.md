---
sidebar_position: 10
---

# AI Integration

The AI companion integration in Kublade provides intelligent assistance through various AI models. By default, it integrates with OpenAI's API, but it also supports Open WebUI's API as a drop-in replacement for self-hosted models.

## Configuration

The AI integration can be configured using the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `AI_ENABLED` | Enable/disable the AI integration | `false` |
| `AI_MODEL` | The model to use for AI completions | `o4-mini` |
| `AI_API_KEY` | API key for the AI service | - |
| `AI_URL` | Base URL for the AI API | `https://api.openai.com/v1` |

### Example Configuration

```bash
# OpenAI Configuration
AI_ENABLED=true
AI_MODEL=o4-mini
AI_API_KEY=your-api-key-here
AI_URL=https://api.openai.com/v1

# Open WebUI Configuration
AI_ENABLED=true
AI_MODEL=your-model-name
AI_API_KEY=your-api-key-here
AI_URL=http://your-openwebui-instance:8080/api
```

## API Integration

The AI integration uses the `/chat/completions` endpoint for generating responses. This standardized endpoint makes it possible to use different AI providers that implement the same API interface, such as Open WebUI.

## Model Compatibility

The AI integration is designed to work with various language models, but some models provide better compatibility and performance than others. The choice of model can significantly impact the quality and reliability of AI assistance, especially when dealing with complex template structures and code generation.

### Recommended Models

The following models are recommended for optimal performance:

| Model | Strengths | Best For |
|-------|-----------|-----------|
| OpenAI GPT-4o | - Best overall compatibility<br />- Excellent XML, Blade, and YAML handling<br />- Strong code generation<br />- Reliable instruction following | - Complex template generation<br />- Code assistance<br />- Context-aware responses |
| Anthropic Claude 3 (Opus/Sonnet) | - Superior long-context handling<br />- Consistent structured output<br />- Strong instruction adherence<br />- Reliable tool usage | - Long-form content<br />- Complex reasoning<br />- Detailed documentation |

### Alternative Models

The following models can work with the integration but may require additional configuration or have limitations:

| Model | Considerations | Limitations |
|-------|---------------|-------------|
| DeepSeek R1 | - Good general performance<br />- Cost-effective | - May need explicit formatting rules<br />- Struggles with complex nesting |
| Mistral 7B | - Efficient resource usage<br />- Good for basic tasks | - Limited context window<br />- Inconsistent with complex structures |
| Mixtral | - Strong performance<br />- Good balance of capabilities | - Variable output quality<br />- May need prompt engineering |
| LLaMA 3 8B+ | - Open source<br />- Customizable | - Requires careful prompting<br />- Inconsistent with nested structures |

When using alternative models, consider the following:
- Provide explicit examples in the system prompts
- Use stricter output formatting rules
- Test thoroughly with your specific use cases
- Be prepared for potential inconsistencies with complex nested structures (e.g., Blade templates within YAML within XML)

## Tools / Agent Mode

The AI integration includes a powerful agent mode that enables direct interaction with the application through the chat interface. This feature allows the AI assistant to perform actions directly within your Kublade instance, such as creating and managing templates, configuring ports, and defining form fields.

### Tool System Overview

The agent mode uses a structured XML-based tool system, where each tool is defined within `<kbl-tool>` tags. All tools support three basic actions:
- `create`: Create new resources
- `update`: Modify existing resources
- `delete`: Remove resources

### Available Tools

#### Template File Management
```xml
<kbl-tool type="template_file" action="create" path="path/to/file">
  content of the file
</kbl-tool>
```
- Creates, updates, or deletes template files
- Includes file content for create/update actions
- Path specifies the location within the template structure

#### Template Folder Management
```xml
<kbl-tool type="template_folder" action="create" path="path/to/folder" />
```
- Creates or removes template folders
- Uses self-closing tags as no content is needed
- Path defines the folder location

#### Port Configuration
```xml
<kbl-tool type="template_port" action="create" 
  group="group" 
  claim="claim" 
  preferred_port="preferred_port" 
  random="true" />
```
- Manages port configurations for templates
- Supports group and claim assignments
- Allows preferred port specification
- Includes random port allocation option

#### Form Field Management
```xml
<kbl-tool type="template_field" action="create" 
  field_type="input_text" 
  label="label" 
  key="key" 
  value="value" 
  required="true" 
  secret="false" 
  set_on_create="true" 
  set_on_update="true" />
```
The template field tool supports various field types:
- Basic inputs: `input_text`, `input_hidden`, `textarea`
- Numeric inputs: `input_number`, `input_range`
- Selection inputs: `input_radio`, `input_radio_image`, `input_checkbox`, `select`

Field-specific features:
- Numeric fields (`input_number`, `input_range`) support:
  - `min`: Minimum value
  - `max`: Maximum value
  - `step`: Increment step
- Selection fields (`input_radio`, `input_radio_image`, `select`) support options:
```xml
<kbl-tool type="template_field" action="create" field_type="select" ...>
  <kbl-field-option label="label" value="value" default="true" />
</kbl-tool>
```

### Using the Agent Mode

The AI assistant can use these tools to:
1. Create and manage template structures
2. Configure application ports
3. Define form fields with appropriate validation
4. Generate complete template configurations

When interacting with the agent mode, the AI will:
- Understand your requirements
- Generate appropriate tool calls
- Execute actions directly in your Kublade instance
- Provide feedback on the results

Example interaction:
```
User: "Create a new template with a text input for the application name and a port configuration"
AI: [Generates and executes appropriate tool calls to create the template structure, add the form field, and configure the port]
```

### Best Practices

When using the agent mode:
- Be specific about your requirements
- Review generated configurations before applying
- Use the chat history to maintain context
- Leverage the AI's understanding of template structures
- Consider using the agent mode for complex template setups

## System Prompts

The AI companion uses custom system prompts to define its behavior. These prompts can be:

- **Global**: Define the general behavior of the AI agent
- **Context-aware**: Additional prompts are sent based on the current context, such as:
  - Template variables when editing a template
  - Deployment-specific information
  - Current page context

This context-aware approach ensures that the AI assistant can provide relevant and accurate assistance based on the user's current task and environment.

## Chat Interface

When the AI integration is enabled and you are logged in, you can access the AI chat through a bot icon located in the bottom right corner of the interface. The chat interface provides the following features:

- **Quick Access**: The persistent bot icon allows you to start or continue conversations at any time
- **Chat History**: Previous conversations are preserved and can be continued
- **Session Management**: Each chat session maintains its context and history
- **Context Awareness**: The AI assistant automatically receives relevant context based on your current location in the application
- **User Privacy**: All chat sessions are user-bound and can only be accessed by the user who owns the conversation

To start using the AI chat:
1. Ensure the AI integration is enabled in your configuration
2. Log in to your Kublade instance
3. Look for the bot icon in the bottom right corner
4. Click the icon to open the chat window
5. Start a new conversation or continue an existing one

The chat interface preserves the entire conversation history, allowing you to maintain context across multiple sessions and interactions with the AI assistant.
