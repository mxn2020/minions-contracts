---
title: Quick Start
description: Get up and running with Minions Contracts in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-contracts/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_contracts import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
contracts info
```
