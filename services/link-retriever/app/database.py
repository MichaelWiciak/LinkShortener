def connect_to_database(db_name: str):
    if db_name == "mongodb":
        # Logic to connect to MongoDB
        pass
    elif db_name == "postgresql":
        # Logic to connect to PostgreSQL
        pass
    elif db_name == "sqlite":
        # Logic to connect to SQLite
        pass
    else:
        raise ValueError("Unsupported database")
