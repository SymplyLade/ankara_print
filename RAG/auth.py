# """
# Backendless Authentication Module using REST API
# """
# import os
# import httpx
# from typing import Dict
# from dotenv import load_dotenv

# load_dotenv()

# # Initialize Backendless
# BACKENDLESS_APP_ID = os.getenv("BACKENDLESS_APP_ID", "")
# BACKENDLESS_API_KEY = os.getenv("BACKENDLESS_API_KEY", "")
# BACKENDLESS_URL = os.getenv("BACKENDLESS_URL", "https://api.backendless.com")

# if BACKENDLESS_APP_ID and BACKENDLESS_API_KEY:
#     backendless_initialized = True
# else:
#     backendless_initialized = False
#     print("⚠️ Backendless not configured. Set BACKENDLESS_APP_ID and BACKENDLESS_API_KEY in .env")


# class AuthService:
#     """Authentication service using Backendless REST API"""
    
#     @staticmethod
#     async def register_user(email: str, password: str, name: str = None) -> Dict:
#         """Register a new user"""
#         if not backendless_initialized:
#             return {
#                 "success": False,
#                 "error": "Backendless not configured"
#             }
        
#         try:
#             async with httpx.AsyncClient() as client:
#                 payload = {
#                     "email": email,
#                     "password": password
#                 }
#                 if name:
#                     payload["name"] = name
                
#                 response = await client.post(
#                     f"{BACKENDLESS_URL}/{BACKENDLESS_APP_ID}/{BACKENDLESS_API_KEY}/users/register",
#                     json=payload
#                 )
                
#                 if response.status_code == 200:
#                     data = response.json()
#                     return {
#                         "success": True,
#                         "user": {
#                             "objectId": data.get("objectId"),
#                             "email": data.get("email"),
#                             "name": data.get("name")
#                         },
#                         "userToken": data.get("userToken")
#                     }
#                 else:
#                     error_data = response.json() if response.content else {}
#                     return {
#                         "success": False,
#                         "error": error_data.get("message", f"Registration failed: {response.status_code}")
#                     }
#         except Exception as e:
#             return {
#                 "success": False,
#                 "error": str(e)
#             }
    
#     @staticmethod
#     async def login_user(email: str, password: str) -> Dict:
#         """Login user and return session token"""
#         if not backendless_initialized:
#             return {
#                 "success": False,
#                 "error": "Backendless not configured"
#             }
        
#         try:
#             async with httpx.AsyncClient() as client:
#                 response = await client.post(
#                     f"{BACKENDLESS_URL}/{BACKENDLESS_APP_ID}/{BACKENDLESS_API_KEY}/users/login",
#                     json={"login": email, "password": password}
#                 )
                
#                 if response.status_code == 200:
#                     data = response.json()
#                     return {
#                         "success": True,
#                         "user": {
#                             "objectId": data.get("objectId"),
#                             "email": data.get("email"),
#                             "name": data.get("name")
#                         },
#                         "userToken": data.get("userToken")
#                     }
#                 else:
#                     error_data = response.json() if response.content else {}
#                     return {
#                         "success": False,
#                         "error": error_data.get("message", f"Login failed: {response.status_code}")
#                     }
#         except Exception as e:
#             return {
#                 "success": False,
#                 "error": str(e)
#             }
    
#     @staticmethod
#     async def logout_user(user_token: str) -> Dict:
#         """Logout user"""
#         if not backendless_initialized:
#             return {
#                 "success": False,
#                 "error": "Backendless not configured"
#             }
        
#         try:
#             async with httpx.AsyncClient() as client:
#                 headers = {"user-token": user_token} if user_token else {}
#                 response = await client.get(
#                     f"{BACKENDLESS_URL}/{BACKENDLESS_APP_ID}/{BACKENDLESS_API_KEY}/users/logout",
#                     headers=headers
#                 )
                
#                 if response.status_code == 200:
#                     return {
#                         "success": True,
#                         "message": "Logged out successfully"
#                     }
#                 else:
#                     return {
#                         "success": False,
#                         "error": f"Logout failed: {response.status_code}"
#                     }
#         except Exception as e:
#             return {
#                 "success": False,
#                 "error": str(e)
#             }
    
#     @staticmethod
#     async def get_current_user(user_token: str) -> Dict:
#         """Get current user by token"""
#         if not backendless_initialized:
#             return {
#                 "success": False,
#                 "error": "Backendless not configured"
#             }
        
#         if not user_token:
#             return {
#                 "success": False,
#                 "error": "User token required"
#             }
        
#         try:
#             async with httpx.AsyncClient() as client:
#                 response = await client.get(
#                     f"{BACKENDLESS_URL}/{BACKENDLESS_APP_ID}/{BACKENDLESS_API_KEY}/users/current",
#                     headers={"user-token": user_token}
#                 )
                
#                 if response.status_code == 200:
#                     data = response.json()
#                     return {
#                         "success": True,
#                         "user": {
#                             "objectId": data.get("objectId"),
#                             "email": data.get("email"),
#                             "name": data.get("name")
#                         }
#                     }
#                 else:
#                     return {
#                         "success": False,
#                         "error": "User not found or token invalid"
#                     }
#         except Exception as e:
#             return {
#                 "success": False,
#                 "error": str(e)
#             }
    
#     @staticmethod
#     async def reset_password(email: str) -> Dict:
#         """Reset password"""
#         if not backendless_initialized:
#             return {
#                 "success": False,
#                 "error": "Backendless not configured"
#             }
        
#         try:
#             async with httpx.AsyncClient() as client:
#                 response = await client.post(
#                     f"{BACKENDLESS_URL}/{BACKENDLESS_APP_ID}/{BACKENDLESS_API_KEY}/users/restorepassword",
#                     json={"email": email}
#                 )
                
#                 if response.status_code == 200:
#                     return {
#                         "success": True,
#                         "message": "Password reset email sent"
#                     }
#                 else:
#                     error_data = response.json() if response.content else {}
#                     return {
#                         "success": False,
#                         "error": error_data.get("message", f"Reset failed: {response.status_code}")
#                     }
#         except Exception as e:
#             return {
#                 "success": False,
#                 "error": str(e)
#             }








"""
Mock Authentication Module - No actual authentication
"""
import uuid
from typing import Dict

class AuthService:
    """Mock authentication service that always succeeds"""
    
    @staticmethod
    async def register_user(email: str, password: str, name: str = None) -> Dict:
        """Mock user registration - always succeeds"""
        return {
            "success": True,
            "user": {
                "objectId": str(uuid.uuid4()),
                "email": email,
                "name": name or email.split("@")[0]
            },
            "userToken": f"mock_token_{uuid.uuid4()}"
        }
    
    @staticmethod
    async def login_user(email: str, password: str) -> Dict:
        """Mock user login - always succeeds"""
        return {
            "success": True,
            "user": {
                "objectId": str(uuid.uuid4()),
                "email": email,
                "name": email.split("@")[0]
            },
            "userToken": f"mock_token_{uuid.uuid4()}"
        }
    
    @staticmethod
    async def logout_user(user_token: str) -> Dict:
        """Mock user logout - always succeeds"""
        return {
            "success": True,
            "message": "Logged out successfully"
        }
    
    @staticmethod
    async def get_current_user(user_token: str) -> Dict:
        """Mock get current user - always returns a mock user"""
        return {
            "success": True,
            "user": {
                "objectId": "mock_user_123",
                "email": "user@example.com",
                "name": "Mock User"
            }
        }
    
    @staticmethod
    async def reset_password(email: str) -> Dict:
        """Mock password reset - always succeeds"""
        return {
            "success": True,
            "message": f"Password reset email sent to {email}"
        }