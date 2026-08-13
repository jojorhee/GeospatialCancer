# Cancer Advocacy Project — React App

A React site built with Vite and React Router: Home, Departments, Officers, and Contact Us.
Styling is a case-file/field-report look (monospace data tags, hairline rules, ruled paper
background) built on your original black nav / `#0ce48d` green / Kumbh Sans branding.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- **Home** (`/`) — hero, full mission statement, and an embedded map of the Texas Cancer
  Compass data app.
- **Departments** (`/departments`) — placeholder list of four departments. Swap in real names
  and descriptions in `src/pages/Departments.jsx`.
- **Officers** (`/officers`) — placeholder grid of six officer slots (photo, role, name, bio).
  Edit `src/pages/Officers.jsx`.
- **Contact Us** (`/contact`) — placeholder contact details (email, phone, location, social)
  plus the embedded volunteer sign-up form. Edit `src/pages/Contact.jsx`.

Anything shown in amber/italic text (e.g. `[ Officer name ]`) is a placeholder — search each
page file for content wrapped in a `.placeholder` className and replace it with real info.

## Volunteer form

The link you gave was the owner-only `/edit` URL, so this uses the public
`https://docs.google.com/forms/d/.../viewform?embedded=true` version instead. If the embed
shows an access error, open the form's *Send* dialog in Google Forms and confirm it's shared
as "Anyone with the link."

## Structure

```
src/
  components/
    Navbar.jsx      # fixed nav: Home / Departments / Officers / Contact Us
    Footer.jsx
  pages/
    Home.jsx         # hero + mission + map
    Departments.jsx  # placeholder department list
    Officers.jsx      # placeholder officer grid
    Contact.jsx       # placeholder contact info + volunteer form
  App.jsx             # routes
  index.css           # your original styles.css + case-file extensions
  main.jsx            # entry point (BrowserRouter)
```
