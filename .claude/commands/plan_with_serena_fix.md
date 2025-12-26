## Project Analysis and Enhancement Plan

### Objective
Analyze the current project structure and codebase to identify areas for improvement and provide actionable recommendations for enhancement.

### Tasks

#### 1. Project Structure Analysis with Serena
- Use Serena to examine the overall project architecture and organization
- Leverage Serena to review directory structure and file organization
- Have Serena assess configuration files and build setup
- Use Serena to identify any structural inconsistencies or anti-patterns

#### 2. Code Quality Assessment with Serena
- Use Serena to analyze code patterns and coding standards
- Leverage Serena to review error handling and logging practices
- Have Serena check for code duplication and refactoring opportunities
- Use Serena to evaluate performance considerations and potential bottlenecks

#### 3. Documentation and Library Analysis
- Use Context7 to retrieve up-to-date documentation for all libraries used in this project
- Cross-reference current library versions with latest stable releases
- Identify deprecated features or outdated practices
- Check for security vulnerabilities in dependencies

#### 4. Enhancement Recommendations
Provide a comprehensive step-by-step plan that includes:
- **Priority Level** (High/Medium/Low) for each recommendation
- **Effort Estimate** (Small/Medium/Large) for implementation
- **Expected Impact** on code quality, performance, or maintainability
- **Implementation Steps** with clear, actionable instructions

### Deliverables
1. **Executive Summary** - High-level findings and key recommendations
2. **Detailed Analysis Report** - Comprehensive breakdown of current state
3. **Enhancement Roadmap** - Prioritized action plan with timelines
4. **Implementation Guide** - Step-by-step instructions for each recommendation

### Memory Management
After collecting all information, use the `write_memory` tool in multiple calls to save:

#### Analysis Plan Archival
First, save the analysis plan itself to maintain a record:
- **`.project-analysis/analysis-plan-v{YYYYMMDD-HHMMSS}.md`** - Timestamped version of this analysis plan
- **`.project-analysis/latest-analysis.md`** - Symlink or copy to the most recent analysis
- **`.project-analysis/analysis-history.md`** - Log of all analysis runs with timestamps and key changes

#### Required Memory Files:
1. **suggested_commands.md** - Essential commands for project development
2. **style_and_conventions.md** - Code style guidelines and project conventions
3. **task_completion_checklist.md** - Steps to follow when completing tasks
4. **project_structure.md** - Overview of project architecture and organization
5. **enhancement_recommendations.md** - Detailed improvement suggestions with priorities
6. **library_documentation.md** - Up-to-date library info from Context7
7. **development_workflow.md** - Best practices for working on this project

#### Memory File Content Guidelines:
- **Analysis Plan Files**: Save with timestamp format (YYYYMMDD-HHMMSS) for version tracking
- **suggested_commands.md**: Include common development commands, build scripts, testing commands, deployment procedures
- **style_and_conventions.md**: Document coding standards, naming conventions, file organization, comment styles
- **task_completion_checklist.md**: Define steps for code review, testing, documentation updates, deployment procedures
- Each memory file should be comprehensive yet concise
- Use markdown formatting for readability
- Include practical examples where applicable
- **Version Control**: Maintain analysis history for tracking project evolution over time

**CRITICAL**: 
1. Create `.project-analysis` folder if it doesn't exist
2. Save the analysis plan with timestamp versioning
3. After completing the onboarding analysis, remember to call `write_memory` to save all collected information to the appropriate memory files!

### Analysis Framework
- Use Serena for comprehensive code and structure analysis
- Leverage Context7 for up-to-date library documentation
- Focus on maintainability, scalability, and performance
- Consider modern best practices and industry standards
- Ensure recommendations align with project goals and constraints
- Provide code examples where applicable

Please begin the analysis and present your findings in a structured, actionable format.
