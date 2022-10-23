/* 
Vercel Deploy
* create account on vercel
* if you want you can connect with github repositories and use
* go to vercel cli (https://vercel.com/docs/cli)
    --> CLI steps
    1. npm i -g vercel : (it will install vercel globally, then you can use it in any folder)
            -> this command also updates vercel if you have any previous version installed
            ->vercel --version : (this command checks the version)
    2. cd to your project folder if you are not already in that folder
    3. vercel : (first time it will prompt you to login, if not logged in already)
        a. Set up and deploy “C:\projects\your-server-folder”? [Y/n] : Y
            -> this is the benefit of cd to the desired project folder, it will automatically select    your working project.
        b. Which scope do you want to deploy to? : m7real
        c. Link to existing project? [y/N] : n (for now)
        d. What’s your project’s name? (dragon-news-server) (folder name by default, u can change)
        e. In which directory is your code located? ./ (by default folder root)
        f. =>
            Local settings detected in vercel.json:
            No framework detected. Default Project Settings:
            - Build Command: `npm run vercel-build` or `npm run build`
            - Development Command: None
            - Install Command: `yarn install`, `pnpm install`, or `npm install`
            - Output Directory: `public` if it exists, or `.`
            ? Want to modify these settings? [y/N] : n
        g. =>
🔗  Linked to m7real/dragon-news-server (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/m7real/dragon-news-server/DFmP1k1qjqBia5xVGea8mjVF3r9f [2s]
✅  Production: https://dragon-news-server-kohl-three.vercel.app [11s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/m7real/dragon-news-server/settings
        
* create vercel.json in the project root (same place as package.json) and add the code from below
                            {
                                "version": 2,
                                "builds": [
                                    {
                                        "src": "index.js",
                                        "use": "@now/node"
                                    }
                                ],
                                "routes": [
                                    {
                                        "src": "/(.*)",
                                        "dest": "index.js"
                                    }
                                ]
                            }


h. Run `vercel --prod` to create a production build and deploy that.  (can use just 'vercel' to make a normal build and deploy , )

! Remember to replace http://localhost:5000 with your vercel app root link (use ctrl + shift + f)
                             like https://dragon-news-server-kohl-three.vercel.app
* then npm run build; then firebase deploy                             
*/
