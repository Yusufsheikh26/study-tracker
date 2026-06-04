from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from datetime import datetime
from database import Base

class StudySession(Base):
    __tablename__ = "study_sessions"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, index=True)
    hours = Column(Float)
    topic = Column(String)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Goal(Base):
    __tablename__ = "goals"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, index=True)
    target_hours = Column(Float)
    current_hours = Column(Float, default=0)
    completed = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

class QuizScore(Base):
    __tablename__ = "quiz_scores"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, index=True)
    score = Column(Float)
    total = Column(Float)
    date = Column(DateTime, default=datetime.utcnow)
    notes = Column(Text, nullable=True)
