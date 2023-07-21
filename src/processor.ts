import {lookupArchive} from '@subsquid/archive-registry'
import {
    BatchContext,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'

export const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: lookupArchive('joystream'),
        chain: 'wss://rpc.joystream.org',
    })
    .addEvent('Balances.Endowed', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Transfer', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.BalanceSet', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Reserved', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Unreserved', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.ReserveRepatriated', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Deposit', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Withdraw', {
        data: {event: {args: true}},
    } as const)
    .addEvent('Balances.Slashed', {
        data: {event: {args: true}},
    } as const)
    .addCall('*', {
        data: {call: {origin: true}},
    } as const)

export type Item = BatchProcessorItem<typeof processor>
export type EventItem = BatchProcessorEventItem<typeof processor>
export type CallItem = BatchProcessorCallItem<typeof processor>
export type ProcessorContext<Store> = BatchContext<Store, Item>
