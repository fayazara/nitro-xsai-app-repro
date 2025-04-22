import { generateObject } from '@xsai/generate-object';
import * as v from 'valibot'

export default defineEventHandler(async (_event) => {
  const { object } = await generateObject({
    apiKey: useRuntimeConfig().openaiApiKey,
    baseURL: 'https://api.openai.com/v1/',
    messages: [
      {
        content: 'Extract the event information.',
        role: 'system'
      },
      {
        content: 'Alice and Bob are going to a science fair on Friday.',
        role: 'user'
      }
    ],
    model: 'gpt-4o-mini',
    schema: v.object({
      name: v.string(),
      date: v.string(),
      participants: v.array(v.string()),
    })
  })
  return object
})
