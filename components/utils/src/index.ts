export const join = (arr: Array<string>) => arr.join('')
export const nullOr = <T>(val?: T): T | null => (val !== undefined ? val : null)

export * from './assert'
export * from './chalk'
export * from './debug'
