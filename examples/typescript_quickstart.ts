import { PiyAPIClient } from '@piyapi/sdk';

async function main() {
  const apiKey = process.env.PIYAPI_API_KEY;
  if (!apiKey) {
    console.error("Please set your PIYAPI_API_KEY environment variable.");
    process.exit(1);
  }

  console.log("Initializing PiyAPI Client...");
  const client = new PiyAPIClient({ apiKey });

  // 1. Store a memory
  console.log("\n--- 1. Storing Memory ---");
  await client.memories.create({
    content: "User prefers dark mode UI and works primarily with React and TypeScript.",
    metadata: { source: "onboarding_chat", user_id: "usr_9918" }
  });
  console.log("Memory stored successfully.");

  // 2. Hybrid search
  console.log("\n--- 2. Hybrid Search ---");
  const results = await client.search({
    query: "frontend framework preference",
    limit: 5,
    alpha: 0.7
  });
  console.log(`Found ${results.length} relevant memories.`);

  // 3. Cognitive RAG
  console.log("\n--- 3. Cognitive RAG ---");
  const answer = await client.ask({
    query: "Summarize user preferences",
    temperature: 0.2
  });
  console.log(`RAG Answer: ${answer.response}`);
  console.log(`Citations: ${answer.citations}`);

  // 4. Bitemporal time-travel query
  console.log("\n--- 4. Bitemporal Time Travel ---");
  const historicalFacts = await client.graph.timeTravel({
    query: "What was the user's role?",
    asOfDate: "2026-01-15T00:00:00Z"
  });
  console.log(`Historical Facts:`, historicalFacts);

  // 5. Memory branching
  console.log("\n--- 5. Memory Branching ---");
  const branch = await client.branches.create('experiment-a', 'main');
  console.log(`Created branch: ${branch.name}`);
  
  const diff = await client.branches.diff('main', 'experiment-a');
  console.log(`Diff:`, diff);

  await client.branches.merge('experiment-a', 'main');
  console.log("Merged 'experiment-a' back to 'main'");
}

main().catch(console.error);
