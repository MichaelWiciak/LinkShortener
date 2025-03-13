from fastapi import APIRouter, HTTPException
from app.models import Link
from app.database import connect_to_database

router = APIRouter()


@router.post("/shorten")
def shorten_link(link: Link):
    # Hash the URL (basic implementation)
    import hashlib

    hash_object = hashlib.md5(link.original_url.encode())
    short_url = hash_object.hexdigest()[:6]

    # Save to the specified database
    db_connection = connect_to_database(link.database)
    # Insert logic to save `link.original_url` and `short_url` to the database.

    return {"original_url": link.original_url, "short_url": short_url}


# test if a endpoint is working
@router.get("/test")
def test():
    return {"message": "Hello World 555"}
