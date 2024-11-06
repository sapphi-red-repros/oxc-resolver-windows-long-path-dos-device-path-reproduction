import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { ResolverFactory } from 'oxc-resolver'

const resolver = new ResolverFactory({})
const result = resolver.sync(
  path.dirname(fileURLToPath(import.meta.url)),
  '@vitejs/longfilename-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
)
console.log('result', result.path)
