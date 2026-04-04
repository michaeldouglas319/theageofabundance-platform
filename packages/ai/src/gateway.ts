import { generateText as aiGenerateText, streamText as aiStreamText, generateObject as aiGenerateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import type { LanguageModelV1 } from 'ai';
import type { Schema } from 'ai';

function getModel(): LanguageModelV1 {
  const provider = process.env.AI_PROVIDER ?? 'openai';
  const model = process.env.AI_MODEL ?? 'gpt-4o-mini';

  switch (provider) {
    case 'anthropic': {
      const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
      return anthropic(model);
    }
    case 'openai':
    default: {
      const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
      return openai(model);
    }
  }
}

function logInDev(action: string, params: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[AI Gateway] ${action}:`, JSON.stringify(params, null, 2));
  }
}

export async function generateText(params: {
  prompt: string;
  system?: string;
  maxTokens?: number;
  temperature?: number;
}) {
  logInDev('generateText', { prompt: params.prompt, system: params.system });

  const result = await aiGenerateText({
    model: getModel(),
    prompt: params.prompt,
    system: params.system,
    maxTokens: params.maxTokens,
    temperature: params.temperature,
  });

  return {
    text: result.text,
    usage: {
      promptTokens: result.usage.promptTokens,
      completionTokens: result.usage.completionTokens,
    },
  };
}

export async function streamText(params: {
  prompt: string;
  system?: string;
  maxTokens?: number;
  temperature?: number;
}) {
  logInDev('streamText', { prompt: params.prompt, system: params.system });

  const result = aiStreamText({
    model: getModel(),
    prompt: params.prompt,
    system: params.system,
    maxTokens: params.maxTokens,
    temperature: params.temperature,
  });

  return result;
}

export async function generateObject<T>(params: {
  prompt: string;
  system?: string;
  schema: Schema<T>;
}) {
  logInDev('generateObject', { prompt: params.prompt, system: params.system });

  const result = await aiGenerateObject({
    model: getModel(),
    prompt: params.prompt,
    system: params.system,
    schema: params.schema,
  });

  return result;
}
