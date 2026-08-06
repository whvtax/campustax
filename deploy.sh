#!/bin/bash
# CampusTax one-command deploy: git commit + push to GitHub + Vercel production.
# Usage: bash deploy.sh
set -e

# Git: init once, commit whatever changed
git init -q 2>/dev/null || true
git add -A
git commit -q -m "Deploy $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "Nothing new to commit"

# GitHub: create the repo on first run, push on every run
if git remote get-url origin >/dev/null 2>&1; then
  git push -q origin HEAD
else
  gh repo create campustax --private --source=. --push
fi

# Vercel: production deploy
vercel --prod
