FROM python:3.11

WORKDIR /app

# Change: Removed "backend/" from the source path
COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

# Change: Removed "backend/" from the source path
COPY . .

CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]