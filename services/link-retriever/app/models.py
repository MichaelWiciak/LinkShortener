from pydantic import BaseModel


class Link(BaseModel):
    original_url: str
    database: str
