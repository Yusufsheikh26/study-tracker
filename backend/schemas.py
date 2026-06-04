from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class StudySessionCreate(BaseModel):
    subject: str
    hours: float
    topic: str
    notes: Optional[str] = None

class StudySessionResponse(StudySessionCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class GoalCreate(BaseModel):
    subject: str
    target_hours: float

class GoalResponse(GoalCreate):
    id: int
    current_hours: float
    completed: int
    created_at: datetime

    class Config:
        from_attributes = True

class QuizScoreCreate(BaseModel):
    subject: str
    score: float
    total: float
    notes: Optional[str] = None

class QuizScoreResponse(QuizScoreCreate):
    id: int
    date: datetime

    class Config:
        from_attributes = True
