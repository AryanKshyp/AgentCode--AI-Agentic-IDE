# test_run.py

from langgraph_main import graph

initial_state = {
    "task": "Build a calculator using React",
    "steps": [],
    "results": []
}

# Run the graph
final_output = graph.invoke(initial_state)

print("\n✅ Final Results:")
for line in final_output["results"]:
    print(line)
