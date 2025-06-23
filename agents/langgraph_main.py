# langgraph_main.py

from langgraph.graph import StateGraph  # ✅ REQUIRED here

from planner_agent import planner_node
from developer_agent import developer_node
from shared_state import OverallState

state_keys = OverallState

builder = StateGraph(state_keys)

builder.add_node("planner", planner_node)
builder.add_node("developer", developer_node)

builder.set_entry_point("planner")
builder.add_edge("planner", "developer")
builder.set_finish_point("developer")

graph = builder.compile()
