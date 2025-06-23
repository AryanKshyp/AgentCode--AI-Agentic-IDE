# planner_agent.py
def planner_node(state):
    task = state["task"]
    print(f"📌 Planner received task: {task}")
    
    steps = [
        f"Analyze requirement: {task}",
        f"Plan structure and tools for: {task}",
        f"Implement core logic for: {task}"
    ]

    return { "steps": steps }
