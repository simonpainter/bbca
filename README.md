# Bell Busk Community Action Website

A community website for Bell Busk and Coniston Cold villages in North Yorkshire, showcasing community events, projects, and initiatives.

## Overview

This is a static website built with HTML, CSS, and vanilla JavaScript, designed to support the Bell Busk Community Action group's activities. The site provides information about upcoming events, current community projects, and ways for local residents to get involved.

## Features

- Responsive design for desktop and mobile devices
- Event calendar for community activities
- Project tracking for local initiatives (defibrillator installation, community garden)
- Newsletter signup form
- Volunteer registration form

## Technical Details

- **Structure**: HTML5 with semantic elements
- **Styling**: CSS3 with responsive media queries 
- **Functionality**: Vanilla JavaScript
- **Deployment**: Automatically deployed to Amazon S3 via GitHub Actions when changes are pushed to the main branch

## Development

To run the site locally, you can use a simple HTTP server:

```bash
# Using Python
python -m http.server

# Or with a tool like live-server (Node.js)
npx live-server
```

## Contribution

To contribute to this website:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## Future Enhancements

- Photo gallery for community events
- Integration with Facebook content
- Interactive map of Bell Busk and Coniston Cold
- Online donation functionality for community projects