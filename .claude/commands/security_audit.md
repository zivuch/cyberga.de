---
allowed-tools: Bash(find:*), Bash(grep:*), Bash(ls:*), Bash(cat:*), Bash(file:*)
description: Comprehensive security audit of codebase for sensitive data leaks and vulnerabilities
argument-hint: [--deep] [--fix]
---

# Security Audit & Leak Detection

Performs a comprehensive security audit of your codebase to identify:
- Hardcoded API keys, tokens, and credentials
- Environment variables exposed in code
- Sensitive file patterns not in .gitignore
- Common security vulnerabilities
- Exposed configuration files

## Usage:
- `/security-audit` - Standard audit
- `/security-audit --deep` - Deep scan including file contents
- `/security-audit --fix` - Generate remediation scripts

---

**Current directory:** !`pwd`

## Task:

Perform a comprehensive security audit with the following steps:

### 1. Project Analysis
- Identify project type and structure
- List all configuration files (package.json, requirements.txt, etc.)
- Check for existing security tools (.github/workflows, pre-commit hooks)

### 2. Credential & Secret Detection

**Search for hardcoded secrets in files:**
```bash
# API Keys patterns
grep -r -i "api[_-]key\|apikey\|secret[_-]key" --include="*.js" --include="*.py" --include="*.json" --include="*.yaml" --include="*.env*" .
# JWT tokens
grep -r "eyJ[A-Za-z0-9_-]*\." --include="*.js" --include="*.py" --include="*.json" .
# AWS keys
grep -r "AKIA[0-9A-Z]{16}" --include="*.*" .
# Database URLs
grep -r "mongodb://\|postgres://\|mysql://" --include="*.*" .
```

**Common secret patterns to detect:**
- AWS Access Keys (AKIA...)
- Google API Keys (AIza...)
- JWT Tokens (eyJ...)
- Database connection strings
- OAuth tokens
- Private keys (BEGIN PRIVATE KEY)
- Passwords in URLs
- Slack tokens (xoxb-, xoxp-)
- GitHub tokens (ghp_, gho_)

### 3. Environment & Configuration Files

**Check for exposed environment files:**
- `.env` files in repository
- Config files with hardcoded values
- Docker files with secrets
- CI/CD configuration files

### 4. .gitignore Analysis

**Verify .gitignore completeness:**
- Common sensitive file patterns
- Environment files (.env, .env.local, etc.)
- IDE files (.vscode/, .idea/)
- Build artifacts (node_modules/, __pycache__)
- Log files (*.log)
- Database files (*.db, *.sqlite)
- Certificate files (*.pem, *.key, *.crt)

**Generate missing patterns if needed**

### 5. File Permissions & Exposure

**Check for:**
- World-readable sensitive files
- Executable files that shouldn't be
- Backup files (.bak, .backup, ~)
- Temporary files

### 6. Dependency Security

**Analyze:**
- Known vulnerable dependencies
- Outdated packages
- Unnecessary dependencies with broad permissions

### 7. Code Vulnerability Patterns

**Search for common issues:**
- SQL injection patterns
- XSS vulnerabilities
- Command injection
- Path traversal
- Insecure random number generation
- Hardcoded cryptographic keys

## Report Generation:

Create a comprehensive report including:

### Executive Summary
- Risk level (Critical/High/Medium/Low)
- Number of issues found by category
- Immediate action required

### Detailed Findings
For each issue found:
- **File:** Location of the issue
- **Type:** Category of security issue
- **Risk Level:** Severity assessment
- **Description:** What was found
- **Impact:** Potential consequences
- **Recommendation:** How to fix

### Security Recommendations

**Immediate Actions (Critical/High):**
1. Remove hardcoded secrets from code
2. Add missing files to .gitignore
3. Rotate exposed credentials
4. Update vulnerable dependencies

**Short-term Improvements:**
1. Implement secret management system
2. Add pre-commit hooks for secret detection
3. Set up dependency vulnerability scanning
4. Implement security linting

**Long-term Security Measures:**
1. Regular security audits
2. Security awareness training
3. Implement SAST/DAST tools
4. Create incident response plan

### Remediation Scripts

Generate scripts for:
- Adding missing patterns to .gitignore
- Removing sensitive files from git history
- Setting up pre-commit hooks
- Implementing environment variable templates

### .gitignore Template

Provide a comprehensive .gitignore template based on detected project type:
```
# Environment files
.env
.env.local
.env.*.local

# Dependencies
node_modules/
__pycache__/

# Build outputs
dist/
build/

# IDE files
.vscode/
.idea/

# Logs
*.log

# Database files
*.db
*.sqlite

# Certificates and keys
*.pem
*.key
*.crt
*.p12

# Backup files
*.bak
*.backup
*~
```

## Implementation:

1. **Scan Phase:** Use find and grep to identify potential issues
2. **Analysis Phase:** Categorize findings by severity and type  
3. **Report Phase:** Generate structured markdown report
4. **Action Phase:** Provide concrete remediation steps

**Arguments:**
- `--deep`: Scan file contents more thoroughly (slower but more comprehensive)
- `--fix`: Generate remediation scripts and updated .gitignore

**Output:** Detailed security report with actionable recommendations and risk prioritization.