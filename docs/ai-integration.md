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
AI_URL=http://your-openwebui-instance:8080/v1
```

## API Integration

The AI integration uses the `/chat/completions` endpoint for generating responses. This standardized endpoint makes it possible to use different AI providers that implement the same API interface, such as Open WebUI.

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
