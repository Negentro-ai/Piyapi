
# PiyAPI Examples

This directory contains interactive examples that you can clone and run locally to get a feel for the PiyAPI SDK.

## Prerequisites

Get your API key from [piyapi.cloud](https://piyapi.cloud) and expose it as an environment variable:

```bash
export PIYAPI_API_KEY="sk_live_..."
```

## Python

To run the Python example, make sure you have the python SDK installed:

```bash
pip install piyapi-memory
python python_quickstart.py
```

## TypeScript / Node.js

To run the TypeScript example, you can use `tsx` or `ts-node`. Make sure you have the TS SDK installed:

```bash
npm install @piyapi/sdk
npx tsx typescript_quickstart.ts
```

These examples will demonstrate:
1. **Storing memories** with metadata
2. **Hybrid searching** across vector + BM25 spaces
3. **Cognitive RAG** processing and fetching citations
4. **Bitemporal time-travel queries** against PiyGraph
5. **Memory Branching** for speculative updates
