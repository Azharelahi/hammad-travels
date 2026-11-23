# Hammad Travels & Tourism

A responsive travel and tourism website for discovering destinations across Pakistan, exploring tour information, browsing car-rental options, and contacting Hammad Travels.

The app is built with React and uses a feature-based source layout, React Router, reusable UI components, React Bootstrap, Tailwind utility classes, and several animation and carousel libraries.

**Live website:** https://hammdtravelsandtourism.com

## Features

- Featured destination carousel on the home page
- Popular tour and destination cards
- Destination details with descriptions, hotels, and image galleries
- Mountain, beach, desert, and forest destination pages
- Tour package listing and route-level tour details
- Car-hire listings, vehicle galleries, and hire details
- Responsive header, footer, and floating contact buttons
- FAQ and legal pages for terms and privacy
- Contact form with validation that opens a pre-filled email in the user's email application
- Embedded Google Maps location
- Static PWA metadata and a sitemap
- Route-level lazy loading with a loading indicator
- Automatic scroll-to-top navigation behavior

## Tech Stack

- **React 18** — component-based user interface
- **React Router 6** — client-side routing
- **Create React App / react-scripts 5** — development server and production builds
- **React Bootstrap 2** and **Bootstrap 5** — layout and responsive components
- **Tailwind CSS 4/PostCSS** — utility styling support
- **Framer Motion** and **React Spring** — animations
- **React Slick** and **Splide** — carousels and sliders
- **Lucide React** and **React Icons** — icon libraries
- **Yet Another React Lightbox** and related libraries — image displays
- **react-datepicker** — date-selection UI

## Pages and Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Banner, features, destination slider, gallery, and call-to-action |
| `/aboutus` | About | Company and tourism information |
| `/tours` | Tours | Tour-package landing page |
| `/tour/:title` | Tour details | Route-state-based individual tour details |
| `/destination/:name` | Destination | Destination details and gallery |
| `/car-hire` | Car hire | Available car and hire listings |
| `/hire-details` | Hire details | Selected vehicle information |
| `/gallery` | Vehicle gallery | Car gallery |
| `/mountaines` | Mountains | Gilgit-Baltistan, Khyber Pakhtunkhwa, and Kashmir destinations |
| `/beaches` | Beaches | Beach destinations |
| `/deserts` | Deserts | Desert destinations |
| `/forests` | Forests | Forest and national park destinations |
| `/faq` | FAQ | Frequently asked questions |
| `/contact` | Contact | Validated mailto contact form and business details |
| `/terms` | Terms | Terms of service |
| `/privacy` | Privacy | Privacy policy |

## Getting Started

### Prerequisites

- Node.js 16 or newer recommended
- npm 7 or newer

### Installation

```bash
git clone https://github.com/Azharelahi/hammad-travels.git
cd hammad-travels
npm install
```

### Development

```bash
npm start
```

The app will be available at `http://localhost:3000` by default.

### Production Build

```bash
npm run build
```

Create React App generates the optimized production output in `build/`.

### Tests

```bash
npm test
```

The project includes Jest and React Testing Library dependencies. The repository's initial `src/App.test.js` is a Create React App placeholder and should be replaced with project-specific tests.

## Project Structure

```text
public/
  index.html          HTML entry point and app metadata
  manifest.json       Installable PWA metadata
  robots.txt          Search-engine crawler instructions
  sitemap.xml         Public route sitemap
  logo*.png           Application icons

src/
  App.js              Main layout, route shell, and scroll behavior
  index.js            React DOM entry point and BrowserRouter setup
  routes/
    AppRoutes.jsx     Route definitions and lazy-loaded pages
  components/
    layout/           Header, footer, and floating buttons
    ui/               Reusable dropdown, heading, and ticker components
  features/
    home/             Landing-page banner, cards, gallery, and sections
    tours/            Tour listings and tour details
    destinations/     Destination detail page
    car-rental/       Car hire, gallery, and vehicle details
    trips/            Mountain, beach, desert, and forest pages
    about/            About-us page
    contact/          Validated contact form and business details
    faq/              Frequently asked questions
    legal/            Terms and privacy policy
  data/
    data.js           Static destination, tour, and category data
  assets/
    images/           Local image resources
  styles/             Global app and entry styles

package.json           Dependencies and npm scripts
jsconfig.json          Source-alias configuration
```

Source imports use absolute aliases such as `components/...`, `features/...`, and `data/...` through `jsconfig.json` and Create React App's module resolution.

## Data and Content

Most destination and tour content is stored locally in `src/data/data.js`, including:

- `destinationsData`
- `popularsData`
- Mountain, beach, desert, and forest destination collections
- Tour details and itinerary content
- Search locations, categories, durations, price ranges, and ratings

Some presentation content uses local assets from `src/assets/images`, while other items use externally hosted Unsplash, iStock, Pexels, and wallpaper images.

## Contact Form Behavior

The contact form in `src/features/contact/Contact.jsx` validates name, email, and message fields locally. It does not submit to a backend or third-party form service. On successful validation, it creates a `mailto:` URL addressed to:

- `contact.hammadtravel@gmail.com`

The visitor's default email application is then opened with the name, email address, and message pre-filled.

## Deployment

Deploy the contents of `build/` to any static host that supports React single-page application routing. Configure the host to rewrite unknown paths to `index.html` so routes such as `/contact`, `/tours`, and `/destination/:name` work after a page refresh.

The included sitemap identifies `https://hammdtravelsandtourism.com` as the production domain.

## Development Notes

- The project is public with no configured license file.
- There are currently no environment variables or API keys configured in the source.
- The application is primarily front-end driven and uses static JavaScript data rather than a database or API.
- Several tour and destination pages may contain demonstration or placeholder content.
- External image URLs require a network connection and are subject to availability from their providers.
- The routes use client-side navigation, so an SPA fallback is required on static hosts.
- `.next/` and `build.zip` are present in the repository, but the active build system is Create React App and the canonical build command is `npm run build`.

## Contributing

1. Create a feature branch from `main`.
2. Keep changes focused and place page-specific code in the appropriate `src/features` directory.
3. Reuse components from `src/components` and static content from `src/data` where appropriate.
4. Run `npm test` and `npm run build` before opening a pull request.

## Contact

- **Website:** https://hammdtravelsandtourism.com
- **Email:** contact.hammadtravel@gmail.com
- **Phone:** +92 334 111 1427
- **Address:** Azeem Plaza, G10 Markaz, Islamabad, Pakistan
