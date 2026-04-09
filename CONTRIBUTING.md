# Contributing to ResuMade

First off, thank you for considering contributing to ResuMade! It's people like you that make ResuMade such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain the behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript and React style guides
* Include thoughtful comments in your code
* End all files with a newline
* Avoid platform-dependent code

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Examples:
```
Add PDF export functionality
Fix email validation in personal info section
Update README with installation instructions
```

### TypeScript Style Guide

* Use TypeScript for all new code
* Follow existing code patterns
* Use meaningful variable and function names
* Add types to all function parameters and return values
* Use interfaces for object types
* Avoid `any` types when possible

### React Style Guide

* Use functional components with hooks
* Keep components small and focused
* Use meaningful component names
* Extract reusable logic into custom hooks
* Follow the single responsibility principle

### CSS/Tailwind Style Guide

* Use Tailwind utility classes
* Avoid custom CSS when Tailwind classes are available
* Follow the 8px spacing system
* Use design system colors (#2563EB, #10B981, etc.)
* Keep responsive design in mind

## Project Structure

When adding new features, please maintain the existing project structure:

```
components/
  - Feature-specific components (navbar.tsx, hero-section.tsx, etc.)
  - ui/ - Shadcn UI components only
styles/
  - Global styles and Tailwind configuration
```

## Development Process

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** following the style guides
4. **Test your changes** thoroughly
5. **Ensure validation works** for all form fields
6. **Run the application** and verify no regressions
7. **Commit your changes** with clear commit messages
8. **Push to your fork** and submit a pull request

## Testing Checklist

Before submitting a pull request, please verify:

- [ ] All form validations work correctly
- [ ] PDF export functions properly
- [ ] LocalStorage persistence works
- [ ] No console errors or warnings
- [ ] Responsive design is maintained
- [ ] No existing features are broken
- [ ] Code follows the style guides
- [ ] Comments are clear and helpful

## Component Guidelines

### Creating New Components

1. Place in appropriate directory (`components/` or `components/ui/`)
2. Use TypeScript with proper interfaces
3. Export as named export
4. Include JSDoc comments for complex logic
5. Follow existing naming conventions

### Modifying Existing Components

1. Preserve existing functionality
2. Maintain backward compatibility
3. Update relevant documentation
4. Test all affected features
5. Consider performance implications

## Adding New Features

When adding new features:

1. **Discuss First**: Open an issue to discuss major changes
2. **Follow Design System**: Use existing colors, spacing, typography
3. **Maintain Consistency**: Match existing UI/UX patterns
4. **Add Validation**: Ensure proper form validation
5. **Update Documentation**: Update README and inline comments
6. **Consider Accessibility**: Follow WCAG guidelines

## Questions?

Feel free to open an issue with your question or contact the maintainers directly.

## Recognition

Contributors will be recognized in the project's README and release notes.

Thank you for contributing to ResuMade! 🎉
