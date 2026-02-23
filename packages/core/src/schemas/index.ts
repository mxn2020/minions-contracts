/**
 * @module @minions-contracts/sdk/schemas
 * Custom MinionType schemas for Minions Contracts.
 */

import type { MinionType } from 'minions-sdk';

export const contractType: MinionType = {
  id: 'contracts-contract',
  name: 'Contract',
  slug: 'contract',
  description: 'A formal agreement between parties for a piece of work.',
  icon: '📃',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'applicationId', type: 'string', label: 'applicationId' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'startDate', type: 'string', label: 'startDate' },
    { name: 'endDate', type: 'string', label: 'endDate' },
    { name: 'value', type: 'number', label: 'value' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'signedAt', type: 'string', label: 'signedAt' },
    { name: 'documentId', type: 'string', label: 'documentId' },
  ],
};

export const contracttermType: MinionType = {
  id: 'contracts-contract-term',
  name: 'Contract term',
  slug: 'contract-term',
  description: 'A specific clause or condition within a contract.',
  icon: '📌',
  schema: [
    { name: 'contractId', type: 'string', label: 'contractId' },
    { name: 'label', type: 'string', label: 'label' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'isNegotiable', type: 'boolean', label: 'isNegotiable' },
    { name: 'category', type: 'select', label: 'category' },
  ],
};

export const deliverableType: MinionType = {
  id: 'contracts-deliverable',
  name: 'Deliverable',
  slug: 'deliverable',
  description: 'A scoped output committed to within a contract.',
  icon: '📦',
  schema: [
    { name: 'contractId', type: 'string', label: 'contractId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'dueAt', type: 'string', label: 'dueAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'acceptedAt', type: 'string', label: 'acceptedAt' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const customTypes: MinionType[] = [
  contractType,
  contracttermType,
  deliverableType,
];

