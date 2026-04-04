import { describe, it, expect, vi } from 'vitest';

// Mock Vercel AI SDK
vi.mock('ai', () => ({
  generateText: vi.fn().mockResolvedValue({
    text: 'Hello from AI',
    usage: { promptTokens: 10, completionTokens: 20 },
  }),
  streamText: vi.fn().mockReturnValue({
    textStream: (async function* () { yield 'Hello'; })(),
  }),
  generateObject: vi.fn().mockResolvedValue({
    object: { title: 'Test' },
  }),
}));

vi.mock('@ai-sdk/openai', () => ({
  createOpenAI: vi.fn(() => vi.fn(() => 'mock-model')),
}));

vi.mock('@ai-sdk/anthropic', () => ({
  createAnthropic: vi.fn(() => vi.fn(() => 'mock-model')),
}));

describe('@repo/ai gateway', () => {
  it('generateText returns typed response', async () => {
    process.env.AI_PROVIDER = 'openai';
    process.env.AI_MODEL = 'gpt-4o-mini';
    process.env.OPENAI_API_KEY = 'test-key';

    const { generateText } = await import('../gateway');
    const result = await generateText({ prompt: 'Say hello' });

    expect(result.text).toBe('Hello from AI');
    expect(result.usage.promptTokens).toBe(10);
    expect(result.usage.completionTokens).toBe(20);
  });

  it('generateText passes prompt through to AI SDK', async () => {
    const { generateText: aiGenerateText } = await import('ai');
    const { generateText } = await import('../gateway');

    await generateText({ prompt: 'Test prompt', system: 'You are helpful' });

    expect(aiGenerateText).toHaveBeenCalledWith(
      expect.objectContaining({
        prompt: 'Test prompt',
        system: 'You are helpful',
      }),
    );
  });
});
