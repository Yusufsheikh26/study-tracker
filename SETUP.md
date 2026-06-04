# Study Tracker - Full Stack Setup

## Prerequisites
- Node.js & npm (v16+)
- Python 3.8+
- pip

## Quick Start

### 1. Backend Setup (FastAPI)

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r backend/requirements.txt

# Run server
python -m uvicorn backend.main:app --reload
```

Backend runs on: `http://localhost:8000`

### 2. Frontend Setup (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Project Structure

```
study_tracker/
├── backend/              # FastAPI backend
│   ├── main.py          # FastAPI app
│   ├── models.py        # Database models
│   ├── database.py      # SQLite setup
│   ├── schemas.py       # Pydantic schemas
│   ├── requirements.txt
│   └── study_tracker.db # SQLite database (created on first run)
├── frontend/            # React + Vite frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── SETUP.md
```

## API Endpoints

- `GET /api/sessions` - List all study sessions
- `POST /api/sessions` - Create new study session
- `GET /api/goals` - List all goals
- `POST /api/goals` - Create new goal
- `GET /api/quizzes` - List all quiz scores
- `POST /api/quizzes` - Record quiz score

See Swagger docs: `http://localhost:8000/docs`
