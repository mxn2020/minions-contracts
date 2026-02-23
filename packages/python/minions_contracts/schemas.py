"""
Minions Contracts SDK — Type Schemas
Custom MinionType schemas for Minions Contracts.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

contract_type = MinionType(
    id="contracts-contract",
    name="Contract",
    slug="contract",
    description="A formal agreement between parties for a piece of work.",
    icon="📃",
    schema=[
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="clientId", type="string", label="clientId"),
        FieldDefinition(name="applicationId", type="string", label="applicationId"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="startDate", type="string", label="startDate"),
        FieldDefinition(name="endDate", type="string", label="endDate"),
        FieldDefinition(name="value", type="number", label="value"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="signedAt", type="string", label="signedAt"),
        FieldDefinition(name="documentId", type="string", label="documentId"),
    ],
)

contract_term_type = MinionType(
    id="contracts-contract-term",
    name="Contract term",
    slug="contract-term",
    description="A specific clause or condition within a contract.",
    icon="📌",
    schema=[
        FieldDefinition(name="contractId", type="string", label="contractId"),
        FieldDefinition(name="label", type="string", label="label"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="isNegotiable", type="boolean", label="isNegotiable"),
        FieldDefinition(name="category", type="select", label="category"),
    ],
)

deliverable_type = MinionType(
    id="contracts-deliverable",
    name="Deliverable",
    slug="deliverable",
    description="A scoped output committed to within a contract.",
    icon="📦",
    schema=[
        FieldDefinition(name="contractId", type="string", label="contractId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="dueAt", type="string", label="dueAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="acceptedAt", type="string", label="acceptedAt"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

custom_types: list[MinionType] = [
    contract_type,
    contract_term_type,
    deliverable_type,
]

