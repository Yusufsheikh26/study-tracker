from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime

from database import engine, get_db, Base
from models import StudySession, Goal, QuizScore
from schemas import (
    StudySessionCreate, StudySessionResponse,
    GoalCreate, GoalResponse,
    QuizScoreCreate, QuizScoreResponse
)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Study Tracker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Study Tracker API"}

@app.post("/api/sessions", response_model=StudySessionResponse)
def create_session(session: StudySessionCreate, db: Session = Depends(get_db)):
    db_session = StudySession(**session.model_dump())
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    return db_session

@app.get("/api/sessions", response_model=List[StudySessionResponse])
def get_sessions(db: Session = Depends(get_db)):
    return db.query(StudySession).order_by(StudySession.created_at.desc()).all()

@app.post("/api/goals", response_model=GoalResponse)
def create_goal(goal: GoalCreate, db: Session = Depends(get_db)):
    db_goal = Goal(**goal.model_dump())
    db.add(db_goal)
    db.commit()
    db.refresh(db_goal)
    return db_goal

@app.get("/api/goals", response_model=List[GoalResponse])
def get_goals(db: Session = Depends(get_db)):
    return db.query(Goal).all()

@app.post("/api/quizzes", response_model=QuizScoreResponse)
def create_quiz(quiz: QuizScoreCreate, db: Session = Depends(get_db)):
    db_quiz = QuizScore(**quiz.model_dump())
    db.add(db_quiz)
    db.commit()
    db.refresh(db_quiz)
    return db_quiz

@app.get("/api/quizzes", response_model=List[QuizScoreResponse])
def get_quizzes(db: Session = Depends(get_db)):
    return db.query(QuizScore).order_by(QuizScore.date.desc()).all()

@app.get("/api/stats")
def get_stats(db: Session = Depends(get_db)):
    sessions = db.query(StudySession).all()
    total_hours = sum(s.hours for s in sessions)
    subjects = list(set(s.subject for s in sessions))

    return {
        "total_hours": total_hours,
        "total_sessions": len(sessions),
        "subjects": subjects,
        "average_per_session": total_hours / len(sessions) if sessions else 0
    }
