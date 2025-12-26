---
allowed-tools: Bash(pwd:*), Bash(ls:*), Bash(du:*), Bash(rm:*)
description: Clear Claude Code session cache to remove sensitive data
argument-hint: [confirm]
---

# Clear Claude Code Cache

This command clears the Claude Code session cache for the CURRENT PROJECT ONLY to remove potentially sensitive data like API keys, tokens, or credentials that may have been logged.

**WARNING**: This removes conversation history for the current project only. Your code files and other projects remain unaffected.

## What gets cleared:
- Session logs (.jsonl files) containing conversation history for current project
- Current project's cached conversation data only

## What's preserved:
- Your actual code and project files
- Global Claude Code settings and installation
- Other projects' conversation history and caches

## Usage:
- `/clear-cache confirm` - Execute cache clearing
- `/clear-cache` - Preview what would be cleared (dry run)

---

**Current working directory:** !`pwd`

## Task:

**If argument is "confirm":**
1. Determine current project's cache directory using pwd
2. List session files before clearing
3. Remove .jsonl files (not the directory itself)
4. Show confirmation of cleared files
5. Explain security benefits
6. Confirm code files and other projects remain untouched
7. Note that new session file creation is normal

**If no argument or not "confirm":**
1. Show dry run for current project only
2. Determine current project's cache directory using pwd
3. List existing cache files for current project
4. Show total size of data to be cleared
5. Instruct user to run `/clear-cache confirm` to execute
6. Warn about conversation history loss for current project only

## Cache Directory Format:
- Base: `~/.claude/projects/`
- Format: `-` + directory_path_with_slashes_replaced_by_dashes
- Example: `/data/user/project` → `~/.claude/projects/-data-user-project`

## Important Notes:
- Remove individual .jsonl files, not directories
- Active session file will recreate immediately (expected behavior)
- Focus on removing previous session files to clear sensitive data
- New session file after clearing indicates success

Argument provided: "$1"