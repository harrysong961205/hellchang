from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def 이름():
  return '보낼 값'


@app.get("/secondpage")
def 야옹():
  return {'고양이' : '야옹'}