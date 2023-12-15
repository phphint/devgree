# Use an official Python runtime as a parent image
FROM python:3.9.18-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install needed packages one by one
RUN pip install fastapi
RUN pip install uvicorn
RUN pip install transformers
RUN pip install pdfminer.six
RUN pip install torch
RUN pip install python-multipart


# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

