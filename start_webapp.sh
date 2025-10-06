#!/bin/bash

echo "============================================"
echo "Literature Review Web App Launcher"
echo "============================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python 3 is not installed"
    echo "Please install Python 3.8 or higher"
    exit 1
fi

echo "Python found: $(python3 --version)"
echo ""

# Check if requirements are installed
echo "Checking dependencies..."
if ! python3 -c "import flask" &> /dev/null; then
    echo "Installing dependencies..."
    pip3 install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies"
        exit 1
    fi
    echo "Dependencies installed successfully!"
else
    echo "Dependencies already installed!"
fi
echo ""

# Check for .env file
if [ ! -f .env ]; then
    echo "WARNING: .env file not found"
    echo "For full functionality, copy .env.example to .env and add your API key"
    echo ""
fi

echo "Starting web application..."
echo ""
echo "Once started, open your browser and navigate to:"
echo "http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "============================================"
echo ""

python3 app.py
