from fastapi import FastAPI
# from pydantic import BaseModel
# from typing import Optional, Text
# from datetime import datetime
import json

app = FastAPI()
postdb = []

# class Post(BaseModel):
#     id: int
#     title: str
#     author: str
#     content: Text
#     created_at: datetime = datetime.now()
#     published_at: datetime
#     published: Optional[bool] = False

# @app.get("/")
# def read_root():
#   return {"home": "Home page"}

# @app.get("/blog")
# def get_posts():
#     return postdb

# @app.post("/blog")
# def add_post(post: Post):
#     postdb.append(post.dict())
#     return postdb[-1]

@app.get('/json')
def recieve_messages():
    with open('articles.json', encoding='utf-8') as myfile:
      data = json.load(myfile)
      return [data]