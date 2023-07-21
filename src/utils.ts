import * as ss58 from '@subsquid/ss58'
import {decodeHex, toHex} from '@subsquid/substrate-processor'

export function getOriginAccountId(origin: any) {
    if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
        const id = origin.value.value
        if (id.__kind === 'Id') {
            return decodeHex(id.value)
        } else {
            return decodeHex(id)
        }
    } else {
        return undefined
    }
}

export function encodeId(id: Uint8Array, prefix: string | number | undefined) {
    return prefix != null ? ss58.codec(prefix).encode(id) : toHex(id)
}

export function decodeId(id: string, prefix: string | number | undefined) {
    return prefix != null ? ss58.codec(prefix).decode(id) : decodeHex(id)
}

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}
