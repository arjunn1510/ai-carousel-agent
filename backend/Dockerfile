FROM python:3.11

WORKDIR /app

# Because Root Directory is /backend, Docker sees requirements.txt 
# in the current folder. Do NOT use "backend/requirements.txt" here.
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy everything from the current folder (which is /backend) into /app
COPY . .

CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]