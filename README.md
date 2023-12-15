### File creation and Installation

- First create the folder "Admin-Dashboard" for the project in your system or open the Vscode terminal and type: mkdir admin-dashboard
- Move in the folder using cd admin-dashboard. (on the terminal)
- Then type; npx create-next-app@latest
  ** On installation, you'll see the following prompts:**

  ```
    What is your project named? admin-dashboard > name your project here
    Would you like to use TypeScript? No / Yes > Click Yes to use typeScript and No for javaScript
    Would you like to use ESLint? No / Yes > choose to ESLint or not
    Would you like to use Tailwind CSS? No / Yes > choose to use Tailwind for styling or not
    Would you like to use `src/` directory? No / Yes > choose to add all layout in the "src" directory or not
    Would you like to use App Router? (recommended) No / Yes > choose between App Router Appilication or Page Router Appilication
    Would you like to customize the default import alias (@/_)? No / Yes > choose how to make your import (No)recommended
    What import alias would you like configured? @/_
  ```

- Move in the folder using cd admin-dashboard. (on the terminal)

### File SetUp

-Removal of all the code in both the layout.tsx and page.tsx
-Removal of all the styles in globals.css
-Depending on your choice you can either delete the favicon.ico and the postcss.confing.js or keep them

** On the layout.tsx add this code: **

```
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

** And on the page.tsx add this code: **

```
  const Homepage = () => {
    return (
      <div>Homepage</div>
    )
  }

  export default Homepage
```

### Run

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

And Open http://localhost:3000 with your browser to see the result.

### Website Pages

We will have three main pages in this app

- Home page (current layout.tsx)
- Login page and
- DashBoard page

On the app folder create new two folder the "login" and "dashbord" folder, and add a page.tsx file inside each.

** on the page.tsx in the login folder add this code: **

```
const LoginPage = () => {
  return (
    <div>
      LoginPage
    </div>
  )
}

export default LoginPage
```

** on the page.tsx in the dashbord folder add this code: **

```
const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
```

### UI component

You can create the UI component inside the app folder or outside it but all inside the "src" directory. For me it have mastered me to have my route and component in different folders
so i will be creating my UI component folder inside the "src" directory same folder level will app.

With that said on the src directory create a folder named "Components"(recommended) or "UI" in your src folder and inside the component folder create another two folder one for "Login" and the other for "Dashbord"
