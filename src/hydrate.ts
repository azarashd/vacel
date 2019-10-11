import { Node, NodeType } from './nodes'
import { PlainNode } from './nodes/node'

export const hydrate = (raw: string): Node =>
  JSON.parse(raw, (_, value) => {
    if (value && typeof value.type === 'string') {
      // const node = Node.create(value.type as NodeType, value)

      // if (!node) {
      //   throw new Error('Unexpected JSON structure: ' + value.type)
      // }

      const node = Object.create(Node.prototype)
      Object.assign(node, value)

      return node
    } else {
      return value
    }
  })
