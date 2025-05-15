import os
from canvasapi import Canvas
from dotenv import load_dotenv

API_URL = "https://byui.instructure.com"
load_dotenv()
API_KEY = os.getenv("API_KEY")

canvas = Canvas(API_URL, API_KEY)

try:
    canvas = Canvas(API_URL, API_KEY)
    print("Canvas API object initialized successfully.")
except Exception as e:
    print(f"Error initializing Canvas API: {e}")
    exit()

try:
    user = canvas.get_current_user()
    print(f"\nSuccessfully authenticated as: {user.name} (ID: {user.id})")

    courses = user.get_courses()
    print("\nYour Courses:")
    for course in courses:
        print(f"-{course.name} (ID: {course.id})")

except Exception as e:
    print(f"\nAPI request failed:, {e}")
