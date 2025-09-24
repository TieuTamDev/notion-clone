from fastapi import FastAPI

app = FastAPI(title="Notion Clone", version="0.1.0")

@app.get("/")
async def root():
    return {"message": "Welcome to Notion Clone API"}
