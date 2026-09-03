<p align="center">
  <img src="piyapi.png" width="400" alt="PiyAPI by Negentro"/>
</p>

<p align="center">
  <b>The cognitive memory API for AI agents. Persistent memory, knowledge graphs, bitemporal time-travel, and hybrid search — one API.</b>
</p>

<p align="center">
  <a href="https://piyapi.cloud/docs">Docs</a> ·
  <a href="https://piyapi.cloud/docs/quickstart">Quickstart</a> ·
  <a href="https://piyapi.cloud/">Dashboard</a>
</p>

<div align="center">
<details><summary><b>Read this in other languages</b></summary>

🇺🇸 <a href="README.md">English</a> | 🇨🇳 <a href="README.zh-CN.md">简体中文</a>

</details>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@piyapi/sdk"><img src="https://img.shields.io/npm/v/@piyapi/sdk?style=for-the-badge&color=2563eb&logo=npm" alt="npm"/></a>
  <a href="https://pypi.org/project/piyapi-memory/"><img src="https://img.shields.io/pypi/v/piyapi-memory?style=for-the-badge&color=3776ab&logo=python&logoColor=white" alt="PyPI"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-8b5cf6?style=for-the-badge" alt="License"/></a>
  <a href="https://api.piyapi.cloud/health"><img src="https://img.shields.io/badge/Status-Operational-10b981?style=for-the-badge&logo=statuspage&logoColor=white" alt="System Status"/></a>

  <a href="packages/mcp-server/"><img src="https://img.shields.io/badge/MCP_Tools-40%2B-f97316?style=for-the-badge&logo=anthropic&logoColor=white" alt="MCP Tools"/></a>
  <a href="#-testing--verification"><img src="https://img.shields.io/badge/Tests-9258%20Passed-10b981?style=for-the-badge&logo=jest&logoColor=white" alt="Tests"/></a>
</p>

---

## 📈 Benchmarks (August 2026)

**#1 on LongMemEval, LoCoMo, and ConvoMem** · 95% Recall@15 · 99.4% context reduction · ~50ms user profiles

| Benchmark | Score | Tokens | Latency |
|---|---|---|---|
| LoCoMo | **96.5** | 8.0K | 0.81s |
| LongMemEval | **95.4** | 7.2K | 1.02s |
| ConvoMem | **94.8** | 6.5K | 0.95s |

<p align="center">
  <a href="benchmark.md"><img src="https://img.shields.io/badge/Full%20Benchmark%20Report-View%20Details-6366f1?style=for-the-badge&logo=databricks&logoColor=white" alt="Full Benchmark Report"/></a>
</p>

---

## What is PiyAPI?

**PiyAPI** is the first **Neuro-Symbolic, Self-Correcting, and Sovereign Cognitive Memory Operating System** for AI agents, built by [Negentro](https://negentro.com). We replace fragmented vector stacks with an integrated cognitive engine featuring **Active Inference**, a **Bayesian Truth Engine**, **Bitemporal Knowledge Graphs (`PiyGraph`)**, **Dual-Process Cognition**, **Offline Sleep Consolidation**, **6-Strategy PRM Scoring**, and **20+ Jurisdiction PHI Compliance**.

Your AI forgets everything between conversations. PiyAPI fixes that — with a 426,524+ LOC cognitive engine that goes far beyond simple RAG.

| | |
|---|---|
| 🧠 **Memory Engine** | 8-operator unified surface — store, retrieve, update, delete, merge, summarize, pin, verify. Handles temporal changes, contradictions, and automatic forgetting. |
| 🔍 **Hybrid Search** | Dense vector similarity + BM25 keyword search in a single query. Tunable alpha blending. |
| 🤖 **Cognitive RAG** | Context-aware Q&A with auto-citations. Not just retrieval — reasoning over your memory graph. |
| 🕰️ **Bitemporal Time Travel** | PiyGraph knowledge graph with `valid_at` vs `system_at` reasoning. Query your data as it was at any point in time. |
| 🔌 **12 Data Connectors** | Google Drive · Gmail · Notion · OneDrive · GitHub · Slack · Salesforce · HubSpot · Jira · Confluence · Linear · Web Crawler — auto-sync with real-time CDC webhooks. |
| 📄 **Multi-modal Processing** | PDFs, images (OCR), videos (transcription), code (AST-aware chunking). Upload and it works. |
| 🔐 **Privacy & Compliance** | PHI/PII redaction, tokenization, SAML 2.0 & OIDC SSO, legal hold, data residency, geo-fencing. |
| 🌿 **Speculative Branching** | Create memory branches, diff them, and merge — like Git for your AI's knowledge. |
| 🧩 **40+ MCP Tools** | Full Model Context Protocol integration for Cursor, Windsurf, Claude Desktop, and VS Code. |
| 🔑 **BYOK** | Bring Your Own Key — multi-provider routing with automatic failover across OpenAI, Anthropic, Google, and more. |

---

## Use PiyAPI

### 🧑‍💻 I use AI tools

Give your AI assistant persistent memory across every conversation. PiyAPI remembers your preferences, projects, and past discussions — and gets smarter over time.

**[→ Jump to MCP setup](#give-your-ai-memory--mcp-setup)**

### 🔧 I'm building AI products

Add memory, RAG, user profiles, knowledge graphs, and connectors to your agents and apps with **a single API**.

No vector DB config. No embedding pipelines. No chunking strategies.

**[→ Jump to developer quickstart](#build-with-piyapi)**

### 🖥️ I want to run it myself

Enterprise-grade cognitive memory, on your machine. **One binary. Zero config.** Bring any model — or run fully offline.

```bash
curl -fsSL https://piyapi.cloud/install | bash
```

**[→ Jump to self-hosting](#piyapi-local--run-it-yourself)**

---

## Give Your AI Memory — MCP Setup

PiyAPI ships with a full Model Context Protocol server exposing 40+ tools, 3 resources, and 3 prompts.

Add to your `claude_desktop_config.json` or `mcp_config.json`:

```json
{
  "mcpServers": {
    "piyapi": {
      "command": "npx",
      "args": ["-y", "@piyapi/mcp-server"],
      "env": {
        "PIYAPI_API_KEY": "your_piyapi_api_key_here",
        "PIYAPI_BASE_URL": "https://api.piyapi.cloud"
      }
    }
  }
}
```

Or use the remote MCP server directly:

```json
{
  "mcpServers": {
    "piyapi": {
      "url": "https://mcp.piyapi.cloud/mcp"
    }
  }
}
```

**Supported clients:** Claude Desktop · Cursor · Windsurf · VS Code · Claude Code · OpenCode

### What your AI gets

| Tool | What it does |
|---|---|
| `memory` | Store, update, merge, or forget information. 8 operators in one unified surface. |
| `recall` | Hybrid search across memories — vector similarity + keyword matching with tunable alpha. |
| `context` | Injects your full profile, preferences, and recent activity into the conversation. |
| `ask` | Cognitive RAG — answers questions with auto-generated citations from your memory graph. |
| `graph` | Traverse the PiyGraph knowledge graph with bitemporal time-travel queries. |

---

## Build with PiyAPI

If you're building AI agents or apps, PiyAPI gives you the entire context stack through one API — memory, cognitive RAG, knowledge graphs, user profiles, connectors, and file processing.

### Install

```bash
npm install @piyapi/sdk    # or: pip install piyapi-memory
```

### Quickstart

<details>
<summary><b>TypeScript / Node.js</b></summary>

```typescript
import { PiyAPIClient } from '@piyapi/sdk';

const client = new PiyAPIClient({
  apiKey: process.env.PIYAPI_API_KEY!,
  baseUrl: 'https://api.piyapi.cloud',
});

// 1. Store a memory
await client.memory.create({
  content: 'User prefers dark mode UI and works primarily with React and TypeScript.',
  metadata: { source: 'onboarding_chat', user_id: 'usr_9918' },
});

// 2. Hybrid search — vector + keyword in one call
const results = await client.search({
  query: 'What frontend framework does the user prefer?',
  limit: 5,
  alpha: 0.7, // 0 = pure keyword, 1 = pure vector
});

// 3. Cognitive RAG with citations
const answer = await client.ask({
  query: 'Summarize the user\'s code preferences and UI choices.',
  temperature: 0.2,
});
// answer.response → Natural language answer
// answer.citations → Source memories used

// 4. Bitemporal time-travel query (unique feature)
const snapshot = await client.graph.query({
  valid_at: '2026-01-15T00:00:00Z',   // When the fact was true
  system_at: '2026-03-01T00:00:00Z',  // When the system recorded it
  query: "What was the user's role?",
});

// 5. Memory branching (unique feature)
const branch = await client.branches.create({ name: 'experiment-a', base: 'main' });
const diff = await client.branches.diff('main', 'experiment-a');
await client.branches.merge('experiment-a', 'main');
```
</details>

<details>
<summary><b>Python</b></summary>

```python
from piyapi import PiyAPIClient

client = PiyAPIClient(api_key="sk_live_...")

# 1. Store a memory
client.memory.store(
    content="User prefers dark mode UI and works primarily with React and TypeScript.",
    metadata={"source": "onboarding_chat", "user_id": "usr_9918"}
)

# 2. Hybrid search
results = client.search(query="frontend framework preference", limit=5, alpha=0.7)

# 3. Cognitive RAG
answer = client.ask(query="Summarize user preferences", temperature=0.2)
print(answer.response)
print(answer.citations)

# 4. Bitemporal time-travel query (unique feature)
historical_facts = client.graph.time_travel(
    query="What was the user's role?",
    as_of_date="2026-01-15T00:00:00Z"
)

# 5. Memory branching (unique feature)
branch = client.branches.create(name="experiment-a", base="main")
diff = client.branches.diff("main", "experiment-a")
client.branches.merge("experiment-a", "main")
```
</details>

<details>
<summary><b>LangChain Integration</b></summary>

```python
from langchain.chains import ConversationChain
from langchain_openai import ChatOpenAI
from piyapi_langchain import PiyAPIChatMessageHistory

history = PiyAPIChatMessageHistory(
    session_id="user_session_492",
    api_key="your_api_key"
)

conversation = ConversationChain(
    llm=ChatOpenAI(model="gpt-4o"),
    memory=history
)

response = conversation.predict(input="What was our roadmap decision last Tuesday?")
```
</details>

### API at a glance

| Method | Purpose |
|---|---|
| `POST /api/v1/memories` | Store content — text, conversations, documents |
| `POST /api/v1/memories/batch` | Bulk store multiple memories |
| `POST /api/v1/memory/op` | Unified 8-operator surface |
| `POST /api/v1/search` | Hybrid vector + keyword search |
| `POST /api/v1/ask` | Cognitive RAG with citations |
| `GET /api/v1/context` | Context retrieval & summarization |
| `POST /api/v1/kg/*` | PiyGraph knowledge graph queries |
| `POST /api/v1/branches` | Speculative memory branching |
| `POST /api/v1/connectors` | Data connector management |
| `POST /api/v1/documents` | Document processing & upload |
| `POST /api/v1/feedback` | Adaptive learning feedback |

Full API reference → [piyapi.cloud/docs](https://piyapi.cloud/docs) · OpenAPI Spec → [api.piyapi.cloud/docs/raw/openapi.json](https://api.piyapi.cloud/docs/raw/openapi.json)

---

## Architecture

```mermaid
graph LR
    A[Your Agent] --> B[Piyapi API]
    B --> C[Hybrid Search]
    B --> D[PiyGraph KG]
    B --> E[Bitemporal Store]
    C & D & E --> F[Context Response]
```

---

## Works with

**OpenAI** · **Anthropic** · **Google Gemini** · **LangChain** · **LlamaIndex** · **OpenAI Agents SDK** · **Mastra** · **Vercel AI SDK** · **CrewAI** · **Cursor** · **Claude Code** · **Claude Desktop** · **Windsurf** · **VS Code** · **Ollama** · **Groq**

---

## PiyAPI local — run it yourself

Enterprise-grade cognitive memory, on your machine. One binary. Zero config.

```bash
curl -fsSL https://piyapi.cloud/install | bash
piyapi-server
```

First boot sets up the embedded PiyGraph engine, local embeddings, vector store, and your credentials, then prints an API key. The full API — memories, search, RAG, knowledge graph, connectors — runs against `http://localhost:6767`.

```typescript
const client = new PiyAPIClient({
  apiKey: 'sk_live_...',
  baseUrl: 'http://localhost:6767', // that's the only change
});
```

- **Bring any model** — OpenAI, Anthropic, Google Gemini, Groq, or any OpenAI-compatible endpoint.
- **BYOK multi-provider routing** — automatic failover across providers.
- **Fully offline** — point it at Ollama and nothing leaves your machine.
- **Your data, one directory** — everything lives in `./.piyapi`, easy to back up or move.
- **Same API as the cloud** — prototype locally, ship on the hosted platform by changing `baseURL`.

---

## Enterprise Features

| Feature | Description |
|---|---|
| **SAML 2.0 & OIDC SSO** | Enterprise single sign-on with any identity provider |
| **Data Residency & Geo-Fencing** | Control where your data lives |
| **Legal Hold & Litigation Blocks** | Dual-custody breakglass for compliance |
| **PHI/PII Redaction** | Automatic tokenization and privacy filtering |
| **Namespace Isolation** | Strict tenant separation for multi-tenant deployments |
| **Prometheus Metrics** | Full observability with `/metrics` endpoint |
| **Admin Console** | User management, impersonation, plan overrides, cache controls |
| **On-Prem Licensing** | Run PiyAPI entirely within your infrastructure |

**Enterprise & BAA inquiries:** `care.piyapi@outlook.com`

---

## SDKs & Integrations

| Platform | Package |
|---|---|
| **TypeScript / Node.js** | `@piyapi/sdk` |
| **Python** | `piyapi-memory` |
| **LangChain** | `packages/langchain-adapter` |
| **MCP Server** | 40+ tools, 3 resources, 3 prompts |

---

## Categorized MCP Tools

| Category | Tools | Description |
| :--- | :--- | :--- |
| **Memory Lifecycle** | `store_memory`, `update_memory`, `get_memory`, `delete_memory`, `list_memories`, `batch_create`, `pin_memory` | Complete CRUD and bulk ingestion with auto-embedding and graph extraction. |
| **Search & Retrieval** | `search_memories`, `fuzzy_search`, `get_context`, `create_context_session`, `ask_memory` | Hybrid search, trigram typo tolerance, and token-aware context packing for LLM prompts. |
| **Knowledge Graph** | `get_graph`, `graph_traverse`, `create_relationship`, `delete_relationship`, `get_clusters`, `kg_search`, `kg_entities`, `kg_ingest`, `kg_stats` | Interactive relationship graphs, multi-hop traversals, entity lookup, and cluster extraction. |
| **Temporal & Time Travel** | `kg_time_travel`, `version_history`, `rollback_memory` | Reconstruct memory state as of any historical timestamp; inspect and rollback diffs. |
| **Cognitive & Quality** | `session_mine`, `session_propose`, `deduplicate`, `find_contradictions`, `memory_audit`, `feedback_positive`, `feedback_negative` | Extract candidate memories from transcripts, resolve contradictions, and train adaptive decay. |
| **Data Connectors** | `list_connectors`, `trigger_connector_sync`, `clip_web_page`, `get_connector_logs` | Trigger manual CDC syncs for Google Drive/Notion/GitHub and clip web articles into memory. |
| **Security & Privacy** | `check_phi`, `export_all` | Verify text for Protected Health Information (PHI) and generate GDPR export bundles. |

---

## Verified Engine Metrics (Audit: August 2026)

| Metric | Live Production Value |
|---|---|
| **Production Substrate** | **426,524+ LOC** across **1,239** TypeScript modules |
| **Test Suites** | **9,258** test cases across **673** test files (100% Jest) |
| **Property-Based Tests** | **1,329** `fc.property()` mathematical correctness assertions |
| **Client-Facing API Endpoints** | **16** endpoints (516 total internal) |
| **MCP Tools** | **40 core tools / 52 registrations** in `@piyapi/mcp-server` v2.0.0 |
| **Database Migrations** | **298** SQL migration files with **90** RLS security policies |
| **CDC Data Connectors** | **12** built-in providers |
| **Cognitive Subsystems** | **51** specialized service modules |
| **Hard Benchmark Pass Rate** | **93.8%** (75/80) |
| **Adversarial Security Rate** | **82.6%** (71/86) |

---

## 🧪 Testing & Verification

```bash
npm test           # Run all 9,258 test cases under Jest
npm run test:props # Run 1,329 property-based tests (fast-check)
npm run test:chaos # Run chaos & resilience test suites
```

---

## How it works under the hood

```
Your app / AI tool
        ↓
     PiyAPI
        │
        ├── Memory Engine        8-operator unified surface, bitemporal storage,
        │                        contradiction resolution, automatic forgetting
        ├── Cognitive RAG        Context-aware Q&A with auto-citations
        ├── PiyGraph KG          Bitemporal knowledge graph with time-travel queries
        ├── Hybrid Search        Dense vector + BM25 keyword, tunable alpha blending
        ├── Speculative Branches Git-like branching for memory experimentation
        ├── BYOK Router          Multi-provider key routing with automatic failover
        ├── Connectors           12 real-time CDC connectors with webhook sync
        ├── Privacy Engine       PHI/PII redaction, tokenization, compliance
        └── File Processing      PDFs, images, videos, code → searchable chunks
```

**Memory is not RAG.** RAG retrieves document chunks — stateless, same results for everyone. Memory extracts and tracks *facts about users* over time, resolving contradictions and forgetting expired information. PiyAPI runs both together by default.

**Bitemporal reasoning.** Every memory has two time dimensions: when the fact was true in the real world (`valid_at`) and when the system recorded it (`system_at`). This enables time-travel queries and audit trails that traditional memory systems can't provide.

**Active inference.** PiyAPI's cognitive engine uses the Friston Free Energy Principle framework for intelligent memory formation — not just storing what you tell it, but actively modeling and predicting what context will be needed.

---

## Legal & Compliance Disclaimer

> ⚠️ PiyAPI provides technical controls (e.g., PHI/PII redaction, field-level encryption, audit logging) designed to assist in meeting compliance requirements. Full compliance with regulations such as HIPAA, GDPR, or SOC 2 requires appropriate infrastructure configuration, organizational governance, and a signed Business Associate Agreement (BAA) where applicable.

**Security disclosures:** `negentroai@gmail.com` — do NOT open a public GitHub issue for security vulnerabilities.

---

## 🤝 Community & Support

<p align="center">
  <a href="https://negentro.com"><img src="negentro.jpeg" width="80" alt="Negentro"/></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/company/negentroai/"><img src="https://img.shields.io/badge/LinkedIn-negentroai-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://x.com/negentroai?s=11"><img src="https://img.shields.io/badge/X-negentroai-000000?style=flat&logo=x&logoColor=white" alt="X"/></a>
  <a href="https://www.instagram.com/negentro_ai"><img src="https://img.shields.io/badge/Instagram-negentro__ai-E4405F?style=flat&logo=instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.reddit.com/u/Negentro_AI"><img src="https://img.shields.io/badge/Reddit-u%2FNegentro__AI-FF4500?style=flat&logo=reddit&logoColor=white" alt="Reddit"/></a>
  <img src="https://img.shields.io/badge/Telegram-Coming%20Soon-26A5E4?style=flat&logo=telegram&logoColor=white" alt="Telegram (channel link coming soon)"/>
</p>

- 🐛 **Issues:** [GitHub Issues](https://github.com/NegentroWorld/Piyapi-by-Negentro/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/NegentroWorld/Piyapi-by-Negentro/discussions)
- 📖 **Documentation:** [piyapi.cloud/docs](https://piyapi.cloud/docs)
- 🔒 **Security:** `negentroai@gmail.com`

---

---

## 🛠️ Developer Setup Manual

> **Every code snippet in this guide has been tested against the live API on Sept 3, 2026.**
> Nothing is assumed. Everything works.

### What is PiyAPI?

A **cloud API** that gives your AI app persistent memory. Store conversations, search them semantically, and retrieve context — all through REST calls or MCP.

**Base URL:** `https://api.piyapi.cloud/api/v1`

---

### Step 1 — Get Your API Key

1. Go to [piyapi.cloud/register](https://piyapi.cloud/register)
2. Create an account
3. Dashboard → copy your API key (`sk_live_...`)

Save it:

```bash
export PIYAPI_API_KEY="sk_live_your_key_here"
```

---

### Step 2 — Verify It Works (30 seconds)

```bash
# Health check (no auth needed)
curl https://api.piyapi.cloud/health
# → {"status":"ok","timestamp":"..."}

# Auth check
curl -H "Authorization: Bearer $PIYAPI_API_KEY" \
  https://api.piyapi.cloud/api/v1
# → {"name":"PiyAPI Memory API","status":"operational",...}
```

If both return 200, you're good. Skip to whichever path fits your stack.

---

### Path A — REST API (Python)

No SDK needed. Pure `urllib` — works everywhere.

#### Store a memory

```python
import json, os, urllib.request

API_KEY = os.environ["PIYAPI_API_KEY"]
BASE = "https://api.piyapi.cloud/api/v1"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

def piy_post(endpoint, payload):
    """POST to PiyAPI. Returns (status_code, response_dict)."""
    req = urllib.request.Request(
        f"{BASE}/{endpoint}",
        data=json.dumps(payload).encode(),
        headers=HEADERS,
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, json.loads(r.read())

def piy_get(endpoint):
    """GET from PiyAPI."""
    req = urllib.request.Request(f"{BASE}/{endpoint}", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, json.loads(r.read())

# Store a memory
status, result = piy_post("memories", {
    "content": "User prefers dark mode and works with React and TypeScript.",
    "namespace": "my-app",   # isolates data per project/user
    "tags": ["preferences"], # optional, for filtering
    "metadata": {"user_id": "u_123"}, # optional, your custom fields
})
memory_id = result["memory"]["id"]
print(f"Stored: {memory_id}")
# → Stored: 2a11b4c6-8049-4071-aaea-237dd5cd5c7f
```

**Response includes auto-generated fields:**
- `importance_score` — how significant PiyAPI thinks this memory is
- `type_tag` — auto-classified category (e.g. "Discussion", "Fact")
- `emotional_tag` — detected sentiment
- `entity_count` — number of entities extracted for the knowledge graph

#### Search memories

PiyAPI has **3 search modes**. All are free to call. Use these instead of `/ask`.

**1. Hybrid Search (recommended — semantic + keyword)**

```python
status, result = piy_post("search/hybrid", {
    "query": "What frontend framework does the user prefer?",
    "namespace": "my-app",
    "limit": 10,
})
for hit in result["results"]:
    mem = hit["memory"]
    score = hit.get("similarity", 0)
    print(f"  [{score:.3f}] {mem['content']}")

# Response also includes:
# result["count"]   → total corpus size
# result["weights"] → how semantic vs keyword was balanced
# result["facets"]  → tag/metadata distribution
# result["metrics"] → latency breakdown
```

**2. Basic Search (semantic only)**

```python
status, result = piy_post("search", {
    "query": "deployment platform",
    "namespace": "my-app",
    "limit": 10,
})
for hit in result["results"]:
    print(f"  [{hit.get('similarity', 0):.3f}] {hit['memory']['content']}")
# Response keys: results, query, count, metrics
```

**3. Fuzzy Search (MCP only — typo-tolerant)**

Available through the MCP server's `fuzzy_search` tool. Uses trigram similarity — great for handling user typos.

#### Get Context (best for injecting into LLM prompts)

This is the **smartest retrieval endpoint**. It packs relevant memories into a token-budgeted context block, ready to inject into your LLM prompt.

```python
status, result = piy_post("context/retrieve", {
    "query": "What does the user work with?",
    "namespace": "my-app",
})
# result["content"]         → formatted context string, ready for prompt injection
# result["tokenCount"]      → how many tokens the context uses
# result["user_profile"]    → auto-built user profile from stored memories
# result["header"]          → metadata about the retrieval
# result["scoring_reasons"] → why each memory was selected

# Inject into your LLM prompt:
context = result["content"]
prompt = f"""You are a helpful assistant. Use this context about the user:

{context}

User question: How should I set up my project?"""
```

> [!TIP]
> **Use `context/retrieve` instead of `/ask`.** It gives you the retrieved memories formatted and token-counted, so you can feed them into your own LLM (OpenAI, Anthropic, Gemini, local models — anything). The `/ask` endpoint runs our built-in RAG pipeline which costs us compute. During our pre-funding phase, please use search + context endpoints and bring your own LLM for the generation step.

#### List memories

```python
status, result = piy_get("memories?namespace=my-app&limit=20")
for mem in result["memories"]:
    print(f"  [{mem['id'][:12]}] {mem['content'][:80]}")
```

#### Delete a memory

```python
memory_id = "2a11b4c6-8049-4071-aaea-237dd5cd5c7f"
req = urllib.request.Request(
    f"{BASE}/memories/{memory_id}",
    headers=HEADERS,
    method="DELETE",
)
with urllib.request.urlopen(req, timeout=30) as r:
    print(r.status)  # → 200
```

---

### Path B — REST API (JavaScript / TypeScript)

```javascript
const API_KEY = process.env.PIYAPI_API_KEY;
const BASE = "https://api.piyapi.cloud/api/v1";

async function piy(method, endpoint, body) {
  const res = await fetch(`${BASE}/${endpoint}`, {
    method,
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  });
  return { status: res.status, data: await res.json() };
}

// Store
const { data } = await piy("POST", "memories", {
  content: "User prefers dark mode and works with React.",
  namespace: "my-app",
});
console.log("Stored:", data.memory.id);

// Hybrid Search (free)
const search = await piy("POST", "search/hybrid", {
  query: "frontend preferences",
  namespace: "my-app",
  limit: 10,
});
search.data.results.forEach(hit => {
  console.log(`  [${hit.similarity?.toFixed(3)}] ${hit.memory.content}`);
});

// Context Retrieval (free — best for LLM injection)
const ctx = await piy("POST", "context/retrieve", {
  query: "What does the user prefer?",
  namespace: "my-app",
});
console.log("Tokens used:", ctx.data.tokenCount);
console.log("Context:", ctx.data.content);
// → Pass ctx.data.content into your own LLM prompt
```

---

### Path C — MCP (Claude Desktop / Cursor / Windsurf / VS Code)

**Zero code. 2 minutes. 30 tools.**

Add to your MCP config:

| Client | Config file |
|---|---|
| Claude Desktop (Mac) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Win) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Cursor | `~/.cursor/mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` |
| VS Code (Copilot) | `.vscode/mcp.json` in your workspace |

```json
{
  "mcpServers": {
    "piyapi": {
      "command": "npx",
      "args": ["-y", "@piyapi/mcp-server"],
      "env": {
        "PIYAPI_API_KEY": "sk_live_your_key_here"
      }
    }
  }
}
```

Restart the client. Your AI now has 30 memory tools:

**Memory:** `store_memory`, `get_memory`, `update_memory`, `delete_memory`, `list_memories`, `batch_create`, `pin_memory`
**Search (free):** `search_memories` (hybrid), `fuzzy_search` (typo-tolerant)
**Context:** `get_context` (token-budgeted), `get_conversation` (history)
**Knowledge Graph:** `kg_ingest`, `kg_search`, `kg_entities`, `kg_stats`, `kg_time_travel`
**Graph:** `get_graph`, `graph_traverse`, `create_relationship`, `delete_relationship`, `get_clusters`
**Other:** `ask_memory` (RAG), `deduplicate`, `version_history`, `rollback_memory`, `feedback_positive`, `feedback_negative`, `check_phi`, `export_all`, `create_context_session`

> [!IMPORTANT]
> **Prefer `search_memories` and `get_context` over `ask_memory`.** The search and context tools are free and return raw results you can feed into any LLM. `ask_memory` runs a full RAG pipeline on our servers which costs compute.

---

### Complete API Reference (Verified)

#### Endpoints that work ✅

| Method | Endpoint | Cost | Purpose |
|---|---|---|---|
| `GET` | `/health` | Free | Health check (no auth needed) |
| `GET` | `/ping` | Free | Ping → pong |
| `GET` | `/api/v1` | Free | API info + quickstart |
| `POST` | `/api/v1/memories` | Free | Store a memory |
| `GET` | `/api/v1/memories?namespace=X&limit=N` | Free | List memories |
| `DELETE` | `/api/v1/memories/<id>` | Free | Delete a memory |
| `POST` | `/api/v1/search` | **Free** | Basic semantic search |
| `POST` | `/api/v1/search/hybrid` | **Free** | Hybrid search (semantic + keyword) |
| `POST` | `/api/v1/context/retrieve` | **Free** | Token-budgeted context for LLM injection |
| `POST` | `/api/v1/ask` | **Costs compute** | Full RAG — use sparingly |

#### Endpoints that DON'T exist (don't try these)

| What you might expect | Reality |
|---|---|
| `GET /api/v1/health` | ❌ 404 — use `GET /health` instead |
| `GET /api/v1/search?query=...` | ❌ 404 — search is POST only |
| `POST /api/v1/semantic` | ❌ 404 — use `/search` or `/search/hybrid` |

---

### Recommended Pattern: Search + Your Own LLM

The most cost-effective way to use PiyAPI:

```python
import json, os, urllib.request

API_KEY = os.environ["PIYAPI_API_KEY"]
BASE = "https://api.piyapi.cloud/api/v1"
HDR = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

def piy_post(ep, payload):
    req = urllib.request.Request(f"{BASE}/{ep}", json.dumps(payload).encode(), HDR, method="POST")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

# 1. Get context (free)
ctx = piy_post("context/retrieve", {
    "query": user_question,
    "namespace": "my-app",
})

# 2. Feed into YOUR LLM (OpenAI, Anthropic, Gemini, local — anything)
import openai
client = openai.OpenAI()
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": f"Use this context:\n\n{ctx['content']}"},
        {"role": "user", "content": user_question},
    ],
)
print(response.choices[0].message.content)
```

This pattern:
- ✅ Uses PiyAPI for what it's best at (storage, indexing, retrieval)
- ✅ Uses your own LLM for generation (you control cost and model)
- ✅ Costs zero PiyAPI compute
- ✅ Works with any LLM provider or local model

---

### Namespaces

Use namespaces to isolate data per user, project, or tenant:

```python
# Per-user isolation
piy_post("memories", {"content": "...", "namespace": "user-alice"})
piy_post("memories", {"content": "...", "namespace": "user-bob"})

# Search only Alice's memories
piy_post("search/hybrid", {"query": "...", "namespace": "user-alice"})
```

Namespaces are just strings. Use hyphens, not underscores (e.g. `my-app` not `my_app`).

---

### Troubleshooting

#### SSL/TLS errors (Docker or sandboxed environments)

```bash
# Fix DNS in Docker
docker run --dns 8.8.8.8 your-image

# Fix TLS in Python
pip install certifi
```

```python
import ssl, certifi
ctx = ssl.create_default_context(cafile=certifi.where())
# Pass ctx to urllib.request.urlopen(..., context=ctx)
```

**Or use MCP** — it runs on your host machine and communicates with the agent over stdio, bypassing sandbox networking entirely.

#### 401 Authentication Error

- Check that `PIYAPI_API_KEY` is set
- Make sure the key starts with `sk_live_`
- Verify at: `curl -H "Authorization: Bearer $PIYAPI_API_KEY" https://api.piyapi.cloud/api/v1`

#### Rate limiting (429)

```python
import time, urllib.error

try:
    response = urllib.request.urlopen(req, timeout=30)
except urllib.error.HTTPError as e:
    if e.code == 429:
        wait = float(e.headers.get("Retry-After", 2))
        time.sleep(wait)
        # retry
```

---

### Quick Copy-Paste Starter

Save as `piyapi_quickstart.py`:

```python
#!/usr/bin/env python3
"""PiyAPI Quickstart — store, search, retrieve context. Zero dependencies."""

import json, os, urllib.request

API_KEY = os.environ["PIYAPI_API_KEY"]
BASE = "https://api.piyapi.cloud/api/v1"
HDR = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

def post(ep, body):
    req = urllib.request.Request(f"{BASE}/{ep}", json.dumps(body).encode(), HDR, method="POST")
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, json.loads(r.read())

# 1. Store
s, r = post("memories", {"content": "User likes React and dark mode", "namespace": "demo"})
print(f"Stored: {r['memory']['id']}")

# 2. Hybrid Search (free)
import time; time.sleep(2)  # wait for indexing
s, r = post("search/hybrid", {"query": "frontend preference", "namespace": "demo", "limit": 5})
print(f"\nSearch results ({len(r['results'])} found):")
for hit in r["results"]:
    print(f"  [{hit.get('similarity',0):.3f}] {hit['memory']['content']}")

# 3. Context Retrieval (free — best for LLM injection)
s, r = post("context/retrieve", {"query": "What does the user prefer?", "namespace": "demo"})
print(f"\nContext ({r['tokenCount']} tokens):")
print(r["content"][:500])
```

```bash
export PIYAPI_API_KEY="sk_live_..."
python3 piyapi_quickstart.py
```

**That's it. No SDK, no dependencies, no config files. Just HTTP.**

## Contributors

<a href="https://github.com/NegentroWorld/Piyapi-by-Negentro/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=NegentroWorld/Piyapi-by-Negentro" alt="Contributors"/>
</a>

[View the project on GitHub](https://github.com/NegentroWorld/Piyapi-by-Negentro)

---

## License

Apache 2.0 © [Negentro](https://negentro.com)

<p align="center">
<strong>PiyAPI by Negentro — Giving AI Agents a True Persistent Mind.</strong>
</p>
