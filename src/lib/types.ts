export interface Preferences {
  ollamaResultViewInput: string;
  ollamaResultViewInputFallback: boolean;
  ollamaChatHistoryMessagesNumber: string;
  ollamaCertificateValidation: string;
}

export interface RaycastArgumentsOllamaCommandCustom {
  fallbackText?: string;
  arguments: {
    prompt: string;
    model: string;
    parameters: string;
  };
  launchType: string;
  launchContext?: string;
}

export interface RaycastArgumentsOllamaCommandTranslate {
  fallbackText?: string;
  arguments: {
    language: string;
  };
  launchType: string;
  launchContext?: string;
}

export interface RaycastArgumentsOllamaCommandEmailResponse {
  fallbackText?: string;
  arguments: {
    responseDetails: string;
  };
  launchType: string;
  launchContext?: string;
}

export interface RaycastArgumentsOllamaCommandTalkResponse {
  fallbackText?: string;
  arguments: {
    input: string;
  };
  launchType: string;
  launchContext?: string;
}

export interface RaycastArgumentsOllamaCommandQueryResponse {
  fallbackText?: string;
  arguments: {
    input: string;
  };
  launchType: string;
  launchContext?: string;
}

export interface RaycastImage {
  path: string;
  html: string;
  base64: string;
}
