# 🔥 How to Get Your Firebase Keys

Since you are new to this, don't worry! It is free and takes about 3 minutes. Follow these exact steps:

### Phase 1: Create the Project
1.  Open this link: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2.  Click **"Add project"** (or "Create a project").
3.  **Name it:** `Linux-Mastery-Hub` (or anything you like).
4.  **Google Analytics:** You can toggle this **OFF** to make setup faster (it's optional).
5.  Click **"Create Project"**.

### Phase 2: Register the App & Find Keys
1.  **You are in the right place!** Your screenshot shows **Project Settings > General**.
2.  **SCROLL DOWN:** Scroll to the very bottom of that page.
3.  **Look for "Your apps":**
    *   **Option A:** If you see a list of icons (Apple, Android, `</>`), click the **`</>` (Web)** icon.
    *   **Option B:** If you already made the app, you will see "Linux Quiz" listed.
4.  **Register app (if needed):** Nickname it `Linux Quiz` -> Register.
5.  **COPY THE KEYS:** Select the **"Config"** radio button to reveal the `apiKey`.
    *   Copy everything inside the `{ ... }` curly braces.

### Phase 3: Enable Google Login (Crucial!)
1.  In the left sidebar, click **"Build"** -> **"Authentication"**.
2.  Click **"Get Started"**.
3.  Click the **"Sign-in method"** tab.
4.  Select **"Google"**.
5.  **Toggle the "Enable" switch**.
6.  **Support email:** Select your own email address from the dropdown.
7.  Click **"Save"**.

---

### Phase 4: Paste Keys into Your Code
Now, go back to your code editor in VS Code.
Open the file: `src/firebase.js`

**Replace these lines:**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

**With the actual keys you copied in Phase 2.**

✅ **That's it!** Once you save the file, the "Sign In" button on your localhost site will work!
