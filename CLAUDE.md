# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Bell Busk Community Action (BBCA) is a community website built with HTML, CSS, and vanilla JavaScript.

## Build Commands
- No build system currently in place
- To serve locally: `python -m http.server` or use Live Server VSCode extension

## Code Style Guidelines
- **HTML**: Use semantic HTML5 elements, maintain proper indentation
- **CSS**: 
  - Follow BEM naming convention for classes when possible
  - Order properties alphabetically within selectors
  - Use descriptive class names
- **JavaScript**:
  - Use camelCase for variables and functions
  - Keep functions small and focused
  - Add event listeners at the bottom of the file
  - Use ES6+ features when appropriate
  
## Error Handling
- Use try/catch blocks for error-prone operations
- Provide appropriate user feedback for form submissions and interactions

## Naming Conventions
- Use descriptive, meaningful names for classes, IDs, and functions
- Avoid generic names like "container" without context