# """
# backend/main.py - UPDATED for AnkaraPrint RAG without memory dependencies
# """
# import os
# from fastapi import FastAPI, UploadFile, File, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List

# from rag_system import create_default_rag  # Uses AnkaraPrintRAGSystem
# # Initialize lazily during app lifespan to avoid heavy work at import-time
# rag_system = None

# # FastAPI app
# # app = FastAPI(
# #     title="AnkaraPrint RAG API",
# #     description="SIMPLIFIED API - No memory modules",
# #     version="2.0.0"
# # )

# # # Allow frontend connections
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:3000", "http://localhost:5173"],  # support common dev ports (React/Vite)
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )
# app = FastAPI(
#     title="AnkaraPrint RAG API",
#     description="SIMPLIFIED API - No memory modules",
#     version="2.0.0",
#     lifespan=lifespan
# )

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],   # use "*" while developing
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Data models
# class ChatMessage(BaseModel):
#     message: str

# class ChatResponse(BaseModel):
#     response: str
#     sources: List[str]

# class SystemStatus(BaseModel):
#     status: str
#     pdf_loaded: bool
#     vector_db_ready: bool
#     llm_connected: bool
#     total_chunks: int


# # App lifespan
# from contextlib import asynccontextmanager

# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     global rag_system
#     try:
#         rag_system = create_default_rag()
#         print("\n" + "="*60)
#         print("ANKARAPRINT RAG SYSTEM STARTED (Simplified)")
#         print("="*60)
#         print("System status:", rag_system.get_system_status())
#         yield
#     finally:
#         print("Shutting down AnkaraPrint RAG system...")

# app = FastAPI(
#     title="AnkaraPrint RAG API",
#     description="SIMPLIFIED API - No memory modules",
#     version="2.0.0",
#     lifespan=lifespan
# )

# # Root endpoint
# @app.get("/")
# async def root():
#     return {
#         "message": "AnkaraPrint Simplified RAG API",
#         "version": "2.0.0",
#         "note": "No memory modules - Simple & Reliable",
#         "endpoints": {
#             "chat": "POST /api/chat",
#             "status": "GET /api/status",
#             "upload": "POST /api/upload-pdf",
#             "profile": "GET /api/profile"
#         }
#     }

# # Status
# @app.get("/api/status")
# async def get_status():
#     """Get system status"""
#     if not rag_system:
#         return SystemStatus(
#             status="offline",
#             pdf_loaded=False,
#             vector_db_ready=False,
#             llm_connected=False,
#             total_chunks=0
#         )
    
#     status = rag_system.get_system_status()
#     return SystemStatus(
#         status="online",
#         pdf_loaded=status["pdf_loaded"],
#         vector_db_ready=status["vector_db_ready"],
#         llm_connected=status["llm_connected"],
#         total_chunks=status["total_chunks"]
#     )

# # Chat endpoint
# @app.post("/api/chat", response_model=ChatResponse)
# async def chat(message: ChatMessage):
#     """Handle chat messages"""
#     if not rag_system:
#         raise HTTPException(status_code=503, detail="RAG system not initialized")
    
#     try:
#         response, sources = rag_system.get_response(message.message)
#         return ChatResponse(response=response, sources=sources)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# # Upload new PDF
# @app.post("/api/upload-pdf")
# async def upload_pdf(file: UploadFile = File(...)):
#     """Upload and process a new PDF"""
#     if not file.filename.endswith('.pdf'):
#         raise HTTPException(status_code=400, detail="Only PDF files allowed")
    
#     try:
#         temp_path = f"temp_{file.filename}"
#         content = await file.read()
#         with open(temp_path, "wb") as f:
#             f.write(content)
    
#         global rag_system
#         if rag_system is None:
#             rag_system = create_default_rag()
        
#         chunks_created = rag_system.process_pdf(temp_path)
#         os.remove(temp_path)
        
#         return {
#             "success": True,
#             "message": f"PDF processed: {file.filename}",
#             "chunks_created": chunks_created
#         }
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# # Profile endpoint
# @app.get("/api/profile")
# async def get_profile():
#     """Get AnkaraPrint profile"""
#     return {
#         "name": "AnkaraPrint Project",
#         "description": "Learning and exploring Ankara Printing techniques",
#         "contact": {
#             "email": "contact@ankaraprint.com",
#             "linkedin": "https://www.linkedin.com/company/ankaraprint",
#             # "github": "https://github.com/AnkaraPrint",
#             "portfolio": "https://ankaraprint.com"
#         }
#     }

# # Test endpoint
# @app.get("/api/test")
# async def test_endpoint():
#     """Test endpoint to verify API is working"""
#     return {
#         "status": "ok",
#         "message": "API is running!",
#         "rag_system_ready": rag_system is not None
#     }

# # Run locally
# if __name__ == "__main__":
#     import uvicorn
#     print("\nStarting FastAPI server...")
#     print("API will be available at: http://localhost:8001")
#     print("API Docs at: http://localhost:8001/docs")
#     uvicorn.run(app, host="127.0.0.1", port=8001)



# """
# backend/main.py - Corrected AnkaraPrint RAG API
# """
# import os
# from fastapi import FastAPI, UploadFile, File, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List
# from contextlib import asynccontextmanager

# from rag_system import create_default_rag  # Uses AnkaraPrintRAGSystem

# # Global RAG system reference
# rag_system = None

# # App lifespan - initialize RAG system on startup
# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     global rag_system
#     try:
#         rag_system = create_default_rag()
#         print("\n" + "="*60)
#         print("ANKARAPRINT RAG SYSTEM STARTED (Simplified)")
#         print("="*60)
#         print("System status:", rag_system.get_system_status())
#         yield
#     finally:
#         print("Shutting down AnkaraPrint RAG system...")

# # Create FastAPI app once
# app = FastAPI(
#     title="AnkaraPrint RAG API",
#     description="SIMPLIFIED API - No memory modules",
#     version="2.0.0",
#     lifespan=lifespan
# )

# # CORS middleware (frontend can connect)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # use "*" for development
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # -------------------
# # Data models
# # -------------------
# class ChatMessage(BaseModel):
#     message: str

# class ChatResponse(BaseModel):
#     response: str
#     sources: List[str]

# class SystemStatus(BaseModel):
#     status: str
#     pdf_loaded: bool
#     vector_db_ready: bool
#     llm_connected: bool
#     total_chunks: int

# # -------------------
# # Endpoints
# # -------------------

# @app.get("/")
# async def root():
#     return {
#         "message": "AnkaraPrint Simplified RAG API",
#         "version": "2.0.0",
#         "note": "No memory modules - Simple & Reliable",
#         "endpoints": {
#             "chat": "POST /api/chat",
#             "status": "GET /api/status",
#             "upload": "POST /api/upload-pdf",
#             "profile": "GET /api/profile"
#         }
#     }

# @app.get("/api/status")
# async def get_status():
#     """Get system status"""
#     if not rag_system:
#         return SystemStatus(
#             status="offline",
#             pdf_loaded=False,
#             vector_db_ready=False,
#             llm_connected=False,
#             total_chunks=0
#         )
#     status = rag_system.get_system_status()
#     return SystemStatus(
#         status="online",
#         pdf_loaded=status["pdf_loaded"],
#         vector_db_ready=status["vector_db_ready"],
#         llm_connected=status["llm_connected"],
#         total_chunks=status["total_chunks"]
#     )

# @app.post("/api/chat", response_model=ChatResponse)
# async def chat(message: ChatMessage):
#     """Handle chat messages"""
#     if not rag_system:
#         raise HTTPException(status_code=503, detail="RAG system not initialized")
#     try:
#         response, sources = rag_system.get_response(message.message)
#         return ChatResponse(response=response, sources=sources)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# @app.post("/api/upload-pdf")
# async def upload_pdf(file: UploadFile = File(...)):
#     """Upload and process a new PDF"""
#     if not file.filename.endswith(".pdf"):
#         raise HTTPException(status_code=400, detail="Only PDF files allowed")
#     try:
#         temp_path = f"temp_{file.filename}"
#         content = await file.read()
#         with open(temp_path, "wb") as f:
#             f.write(content)

#         global rag_system
#         if rag_system is None:
#             rag_system = create_default_rag()

#         chunks_created = rag_system.process_pdf(temp_path)
#         os.remove(temp_path)

#         return {
#             "success": True,
#             "message": f"PDF processed: {file.filename}",
#             "chunks_created": chunks_created
#         }
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# @app.get("/api/profile")
# async def get_profile():
#     """Get AnkaraPrint profile"""
#     return {
#         "name": "AnkaraPrint Project",
#         "description": "Learning and exploring Ankara Printing techniques",
#         "contact": {
#             "email": "contact@ankaraprint.com",
#             "linkedin": "https://www.linkedin.com/company/ankaraprint",
#             "portfolio": "https://ankaraprint.com"
#         }
#     }

# @app.get("/api/test")
# async def test_endpoint():
#     """Test endpoint to verify API is working"""
#     return {
#         "status": "ok",
#         "message": "API is running!",
#         "rag_system_ready": rag_system is not None
#     }

# # -------------------
# # Run locally
# # -------------------

# if __name__ == "__main__":
#     import uvicorn
#     print("\nStarting FastAPI server...")
#     print("API will be available at: http://localhost:8001")
#     print("API Docs at: http://localhost:8001/docs")
#     uvicorn.run(app, host="0.0.0.0", port=8000)  # host=0.0.0.0 allows connections from frontend




# """
# backend/main.py - Render-ready AnkaraPrint RAG API
# """
# import os
# from fastapi import FastAPI, UploadFile, File, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List
# from contextlib import asynccontextmanager

# from rag_system import create_default_rag  # Uses AnkaraPrintRAGSystem

# # Global RAG system reference (lazy loaded)
# rag_system = None

# # App lifespan - initialize RAG system on startup
# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     global rag_system
#     try:
#         print("\n" + "="*60)
#         print("ANKARAPRINT RAG SYSTEM STARTING...")
#         print("="*60)
#         # Lazy load on first request to save memory
#         yield
#     finally:
#         print("Shutting down AnkaraPrint RAG system...")

# # FastAPI app
# app = FastAPI(
#     title="AnkaraPrint RAG API",
#     description="Render-ready Simplified API",
#     version="2.0.0",
#     lifespan=lifespan
# )

# # CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # -------------------
# # Models
# # -------------------
# class ChatMessage(BaseModel):
#     message: str

# class ChatResponse(BaseModel):
#     response: str
#     sources: List[str]

# class SystemStatus(BaseModel):
#     status: str
#     pdf_loaded: bool
#     vector_db_ready: bool
#     llm_connected: bool
#     total_chunks: int

# # -------------------
# # Endpoints
# # -------------------
# @app.get("/")
# async def root():
#     return {
#         "message": "AnkaraPrint Simplified RAG API",
#         "version": "2.0.0",
#         "endpoints": {
#             "chat": "POST /api/chat",
#             "status": "GET /api/status",
#             "upload": "POST /api/upload-pdf",
#             "profile": "GET /api/profile"
#         }
#     }

# @app.get("/api/status")
# async def get_status():
#     global rag_system
#     if rag_system is None:
#         return SystemStatus(
#             status="offline",
#             pdf_loaded=False,
#             vector_db_ready=False,
#             llm_connected=False,
#             total_chunks=0
#         )
#     status = rag_system.get_system_status()
#     return SystemStatus(
#         status="online",
#         pdf_loaded=status["pdf_loaded"],
#         vector_db_ready=status["vector_db_ready"],
#         llm_connected=status["llm_connected"],
#         total_chunks=status["total_chunks"]
#     )

# @app.post("/api/chat", response_model=ChatResponse)
# async def chat(message: ChatMessage):
#     global rag_system
#     if rag_system is None:
#         rag_system = create_default_rag()  # lazy load to save memory
#     try:
#         response, sources = rag_system.get_response(message.message)
#         return ChatResponse(response=response, sources=sources)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# @app.post("/api/upload-pdf")
# async def upload_pdf(file: UploadFile = File(...)):
#     global rag_system
#     if rag_system is None:
#         rag_system = create_default_rag()
#     if not file.filename.endswith(".pdf"):
#         raise HTTPException(status_code=400, detail="Only PDF files allowed")
#     try:
#         temp_path = f"temp_{file.filename}"
#         content = await file.read()
#         with open(temp_path, "wb") as f:
#             f.write(content)

#         chunks_created = rag_system.process_pdf(temp_path)
#         os.remove(temp_path)

#         return {"success": True, "message": f"PDF processed: {file.filename}", "chunks_created": chunks_created}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# @app.get("/api/profile")
# async def get_profile():
#     return {
#         "name": "AnkaraPrint Project",
#         "description": "Learning and exploring Ankara Printing techniques",
#         "contact": {
#             "email": "contact@ankaraprint.com",
#             "linkedin": "https://www.linkedin.com/company/ankaraprint",
#             "portfolio": "https://ankaraprint.com"
#         }
#     }

# @app.get("/api/test")
# async def test_endpoint():
#     return {"status": "ok", "rag_system_ready": rag_system is not None}

# # -------------------
# # Run on Render
# # -------------------
# if __name__ == "__main__":
#     import uvicorn
#     port = int(os.environ.get("PORT", 8000))  # Use Render's port
#     print(f"\nStarting FastAPI server on port {port}...")
#     uvicorn.run("main:app", host="0.0.0.0", port=port)  # remove --reload for production





"""
backend/main.py - Render-ready AnkaraPrint RAG API
"""
import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from contextlib import asynccontextmanager

from rag_system import create_default_rag  # Uses AnkaraPrintRAGSystem

# Global RAG system reference (initialized immediately with default PDF)
rag_system = create_default_rag()

# App lifespan - keep system alive
@asynccontextmanager
async def lifespan(app: FastAPI):
    global rag_system
    try:
        print("\n" + "="*60)
        print("ANKARAPRINT RAG SYSTEM STARTING...")
        print("="*60)
        yield
    finally:
        print("Shutting down AnkaraPrint RAG system...")

# FastAPI app
app = FastAPI(
    title="AnkaraPrint RAG API",
    description="Render-ready Simplified API",
    version="2.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------
# Models
# -------------------
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
    sources: List[str]

class SystemStatus(BaseModel):
    status: str
    pdf_loaded: bool
    vector_db_ready: bool
    llm_connected: bool
    total_chunks: int

# -------------------
# Endpoints
# -------------------
@app.get("/")
async def root():
    return {
        "message": "AnkaraPrint Simplified RAG API",
        "version": "2.0.0",
        "endpoints": {
            "chat": "POST /api/chat",
            "status": "GET /api/status",
            "upload": "POST /api/upload-pdf",
            "profile": "GET /api/profile"
        }
    }

@app.get("/api/status")
async def get_status():
    global rag_system
    status = rag_system.get_system_status()
    return SystemStatus(
        status="online",
        pdf_loaded=status["pdf_loaded"],
        vector_db_ready=status["vector_db_ready"],
        llm_connected=status["llm_connected"],
        total_chunks=status["total_chunks"]
    )

@app.post("/api/chat", response_model=ChatResponse)
async def chat(message: ChatMessage):
    global rag_system
    try:
        response, sources = rag_system.get_response(message.message)
        return ChatResponse(response=response, sources=sources)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@app.post("/api/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    global rag_system
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files allowed")
    try:
        temp_path = f"temp_{file.filename}"
        content = await file.read()
        with open(temp_path, "wb") as f:
            f.write(content)

        chunks_created = rag_system.process_pdf(temp_path)
        os.remove(temp_path)

        return {"success": True, "message": f"PDF processed: {file.filename}", "chunks_created": chunks_created}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@app.get("/api/profile")
async def get_profile():
    return {
        "name": "AnkaraPrint Project",
        "description": "Learning and exploring Ankara Printing techniques",
        "contact": {
            "email": "contact@ankaraprint.com",
            "linkedin": "https://www.linkedin.com/company/ankaraprint",
            "portfolio": "https://ankaraprint.com"
        }
    }

@app.get("/api/test")
async def test_endpoint():
    return {"status": "ok", "rag_system_ready": rag_system is not None}

# -------------------
# Run on Render
# -------------------
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))  # Use Render's port
    print(f"\nStarting FastAPI server on port {port}...")
    uvicorn.run("main:app", host="0.0.0.0", port=port)  # remove --reload for production
