---
layout: ../../layouts/MarkdownLayout.astro
title: "Cr8-xyz Setup Guide"
---

<div class="mb-8">
  <a href="/docs" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
    <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
    Back to Documentation
  </a>
</div>

# Cr8-xyz Setup Guide

Complete installation guide for the Cr8-xyz platform - democratizing 3D creation through AI-powered Blender integration.

## Prerequisites

### System Requirements

- **Operating System**: Linux (Ubuntu 20.04+ recommended)
- **Node.js**: 18.x (LTS)
- **Python**: 3.10+
- **Git**: Latest version
- **Build Tools**: GCC, Make, CMake

### GStreamer Dependencies

Cr8-xyz uses WebRTC for real-time Blender viewport streaming. Install the required GStreamer packages:

```bash
sudo apt update
sudo apt install -y \
  libgstreamer1.0-dev \
  libgstreamer-plugins-base1.0-dev \
  libgstreamer-plugins-good1.0-dev \
  libgstreamer-plugins-bad1.0-dev \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav \
  gstreamer1.0-gl \
  gstreamer1.0-nice
```

> **Important**: These GStreamer modules (GL, App, Video, and WebRTC) are essential for the pixel streaming functionality.

## WebRTC Signalling Server Setup

The WebRTC signalling server enables real-time communication between the frontend and Blender. It runs on `ws://127.0.0.1:8443` and must be started before launching the other components.

### 1. Install Rust and Cargo

First, try installing via apt:

```bash
sudo apt install cargo
```

If the apt version is incompatible with the required plugins, install Rust directly:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

### 2. Install cargo-c

The GStreamer plugins require cargo-c to generate shared and static C libraries:

```bash
cargo install cargo-c
```

### 3. Clone and Build GStreamer Plugins

```bash
# Clone the GStreamer plugins repository
git clone https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs.git
cd gst-plugins-rs

# Build the WebRTC plugin
cargo cbuild -p gst-plugin-webrtc --prefix=/usr
```

### 4. Start the Signalling Server

Navigate to the signalling directory and start the server:

```bash
cd net/webrtc/signalling
cargo run --bin gst-webrtc-signalling-server
```

The server will start on `ws://127.0.0.1:8443`. Keep this terminal open as the server must remain running.

> **Note**: The signalling server acts as the WebRTC coordinator, enabling the frontend and custom Blender build to discover and connect to each other automatically.

## Custom Blender Build

Cr8-xyz requires a custom Blender build with WebRTC viewport streaming support.

### 1. Clone the Custom Blender Repository

```bash
git clone https://code.cr8-xyz.art/Cr8-xyz/blender.git
cd blender
git checkout webrtc-viewport-streaming
```

### 2. Install Build Dependencies

Follow the official [Blender Linux Build Documentation](https://developer.blender.org/docs/handbook/building_blender/linux/) for detailed requirements.

```bash
# Ubuntu/Debian build dependencies
sudo apt install build-essential git subversion cmake libx11-dev \
  libxxf86vm-dev libxcursor-dev libxi-dev libxrandr-dev \
  libxinerama-dev libegl-dev
```

### 3. Update Submodules

```bash
make update
```

### 4. Build Blender

```bash
make
```

> **Note**: The build process can take 30-60 minutes depending on your system specifications.

## Backend Setup (Cr8_engine)

The Cr8_engine is a FastAPI WebSocket server that handles communication between the frontend and Blender.

### 1. Clone the Repository

```bash
git clone https://code.cr8-xyz.art/Cr8-xyz/cr8-app.git
cd cr8-app/backend/cr8_engine
```

### 2. Create Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 5. Start the Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The server will be available at `http://localhost:8000`

## Frontend Setup

The frontend provides an intuitive web interface with WebRTC streaming for real-time Blender interaction.

### 1. Navigate to Frontend Directory

```bash
cd ../../frontend
```

### 2. Install pnpm and Dependencies

```bash
# Install pnpm globally
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 3. Configure Environment Variables

```bash
# Create environment file
cat > .env << EOF
VITE_WS_URL=ws://localhost:8000/ws
VITE_API_URL=http://localhost:8000/api
EOF
```

### 4. Start Development Server

```bash
pnpm dev
```

The frontend will be available at `http://localhost:3000`

## Blender Addon Installation

The Blender Cr8tive Engine addon enables remote control of Blender via WebSocket.

### 1. Install Python Dependencies in Blender

Open Blender's Python console and execute:

```python
import pip
pip.main(['install', 'websocket-client'])
```

### 2. Install the Addon

1. Open Blender
2. Go to **Edit** → **Preferences** → **Add-ons**
3. Click the dropdown arrow button in the top right corner
4. Select **"Install from Disk..."**
5. Navigate to and select the `blender_cr8tive_engine` zip file
6. Enable the checkbox next to **"Cr8tive Engine"**

### 3. Configure Environment Variables

Set these environment variables in your shell:

```bash
export WS_URL=ws://localhost:8000/ws/blender
export CR8_USERNAME=your_username
```

## Running the Complete System

### Start All Services

1. **WebRTC Signalling Server**: Start the signalling server first

   ```bash
   cd gst-plugins-rs/net/webrtc/signalling
   cargo run --bin gst-webrtc-signalling-server
   ```

2. **Backend**: Start the Cr8_engine server

   ```bash
   cd backend/cr8_engine
   source venv/bin/activate
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

3. **Frontend**: Launch the web interface

   ```bash
   cd frontend
   pnpm dev
   ```

4. **Blender**: Open your custom-built Blender with the Cr8tive Engine addon enabled

### Verification

- Backend API: Visit `http://localhost:8000/docs`
- Frontend: Visit `http://localhost:3000`
- WebSocket connection should establish automatically between components

## Troubleshooting

### Common Issues

**Build Errors**

- Ensure all GStreamer dependencies are installed
- Check that you're using the correct Blender branch (`webrtc-viewport-streaming`)

**Connection Issues**

- Verify WebSocket URLs match between frontend and backend
- Check firewall settings for ports 8000 and 3000

**Blender Addon**

- Confirm `websocket-client` is installed in Blender's Python environment
- Check Blender console for connection errors

### Getting Help

For additional support:

- Check the [GitHub Issues](https://code.cr8-xyz.art/Cr8-xyz/cr8-app/issues)
- Review component-specific READMEs in the repository
- Verify environment variable configuration

---

**Next Steps**: Once everything is running, you can start creating 3D content using natural language through the Cr8-xyz interface!
