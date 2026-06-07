import { Mastra } from '@mastra/core/mastra'
import { LibSQLStore } from '@mastra/libsql'
import { butcherWorkflow } from './workflows/butcher-workflow'
import { butcherAgent } from './agents/butcher-agent'

const storage = new LibSQLStore({
  id: 'libsql-storage',
  url: 'file:./storage.db',
})

export const mastra = new Mastra({
  workflows: { butcherWorkflow },
  agents: { butcherAgent },
  storage
})
