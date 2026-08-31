# APEX Engine Automatic Deployment Protocol

Every agent assisting with this repository MUST automatically:
1. Run 
pm run build to compile the production bundle.
2. Commit and push all changes to GitHub (git push origin main).
3. Ensure Vercel production deployment is synchronized so https://apex-engine-six.vercel.app/ is always identical to localhost without the user having to ask.

