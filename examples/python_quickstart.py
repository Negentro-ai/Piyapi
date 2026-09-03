import os
from piyapi_memory import PiyAPIClient

def main():
    # Retrieve the API key from environment variables
    api_key = os.getenv("PIYAPI_API_KEY")
    if not api_key:
        print("Please set your PIYAPI_API_KEY environment variable.")
        return

    print("Initializing PiyAPI Client...")
    client = PiyAPIClient(api_key=api_key)

    # 1. Store a memory
    print("\n--- 1. Storing Memory ---")
    client.memories.create(
        content="User prefers dark mode UI and works primarily with React and TypeScript.",
        metadata={"source": "onboarding_chat", "user_id": "usr_9918"}
    )
    print("Memory stored successfully.")

    # 2. Hybrid search
    print("\n--- 2. Hybrid Search ---")
    results = client.search(query="frontend framework preference", limit=5, alpha=0.7)
    print(f"Found {len(results)} relevant memories.")

    # 3. Cognitive RAG
    print("\n--- 3. Cognitive RAG ---")
    answer = client.ask(query="Summarize user preferences", temperature=0.2)
    print(f"RAG Answer: {answer.response}")
    if hasattr(answer, 'citations'):
        print(f"Citations: {answer.citations}")

    # 4. Bitemporal time-travel query
    print("\n--- 4. Bitemporal Time Travel ---")
    historical_facts = client.graph.time_travel(
        query="What was the user's role?",
        as_of_date="2026-01-15T00:00:00Z"
    )
    print(f"Historical Facts: {historical_facts}")

    # 5. Memory branching
    print("\n--- 5. Memory Branching ---")
    branch = client.branches.create(name="experiment-a", base="main")
    print(f"Created branch: {branch.name}")
    diff = client.branches.diff("main", "experiment-a")
    print(f"Diff: {diff}")
    
    # Merge back to main
    client.branches.merge("experiment-a", "main")
    print("Merged 'experiment-a' back to 'main'")

if __name__ == "__main__":
    main()
