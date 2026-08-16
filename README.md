# 👜 Virtual Bag Try-On AR

Virtual Bag Try-On AR is an Augmented Reality experience developed using Snap Lens Studio and JavaScript.

The Lens allows users to try on two different virtual bags using body and shoulder tracking. Users can tap the screen to switch between the available bags.

## 🎮 Experience

The Lens provides a virtual bag try-on experience where the selected bag is positioned around the user's shoulder area.

- 👜 Try on two different virtual bags.
- 👤 Body tracking detects the user's body.
- 🎯 Shoulder tracking is used for bag positioning.
- 👆 Tap the screen to switch between the two bags.
- 🔄 Switch between Bag 1 and Bag 2 during the experience.
- 📱 Experience the virtual try-on directly through Snapchat AR.

## ✨ Features

- Augmented Reality virtual try-on
- Body tracking
- Shoulder tracking
- Two virtual bag models
- Tap-based bag switching
- Real-time AR bag positioning
- 3D asset integration
- Interactive AR experience
- Custom visual assets
- Snapchat Lens integration

## 🛠️ Technologies Used

| **Technology** | **Purpose** |
| ------------------------ | ------------------------------------------- |
| Snap Lens Studio | AR development and scene creation |
| JavaScript | Bag switching and interaction logic |
| Body Tracking | Body detection and tracking |
| Shoulder Tracking | Shoulder-based bag positioning |
| 3D Models | Virtual bag assets |
| Touch Events | Bag switching interaction |
| Custom Assets | Bags, environment and visual elements |

## 🧠 JavaScript Implementation

The interaction is handled through a JavaScript script responsible for switching between the available virtual bags.

| **Script** | **Responsibility** |
| ------------------------ | ------------------------------------------- |
| `BagSwitcher.js.js` | Handles switching between the two virtual bags |

## 📁 Project Structure

```text
Virtual-Bag-Try-On-AR/
│
├── Assets/
│   ├── BagSwitcher.js.js
│   ├── Bag1.glb
│   ├── Bag2.glb
│   ├── 3D Body Tracking.bodyTracking3D
│   ├── Scene.scene
│   ├── Render Target.renderTarget
│   ├── Echopark.hdr
│   ├── Device Camera Texture.deviceCameraTexture
│   └── 3D Assets & Materials
│
├── Workspaces/
├── Bag_try.esproj
├── icon.png
├── jsconfig.json
├── AGENTS.md
├── preview.mp4
└── .gitignore
