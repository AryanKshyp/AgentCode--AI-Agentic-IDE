# shared_state.py

from typing import TypedDict, List

class PlannerState(TypedDict):
    task: str
    steps: List[str]

class DeveloperState(TypedDict):
    step: str
    file_changes: List[str]

class OverallState(TypedDict):
    task: str
    steps: List[str]
    results: List[str]
