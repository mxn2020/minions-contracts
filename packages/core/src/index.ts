/**
 * Minions Contracts SDK
 *
 * Agreements, statements of work, terms, and signed documents
 *
 * @module @minions-contracts/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Contracts.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
