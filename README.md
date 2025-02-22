# AI Agent Tutorial

Hi, This forked github repo is based on langchain's next.js template, but I've adapted it to replace OpenAI with Deepseek LLM using Groq's FREE API portal. 

Prerequisites:
- Create a Free account on https://console.groq.com/
- Create an API key 
    - (copy the key, to use below in the .env file)
- Create a Free account on https://huggingface.co/
- Create an Access token from https://huggingface.co/settings/tokens 
    - (copy the key, to use below in the .env file)
- Create a Free account on http://supabase.com/
- Create a project on Supabase
    - (copy the Project URL and API Key, to use below in the .env file)

Steps to run this repo:
- Clone this repo
- Duplicate the .env.example to .env file and paste the keys generated in the prerequisites as described above
- run `npm i`
- run `npm run dev`
- Open http://localhost:3000/ 


Tools used:
- Langchain 
- Next.js 
- Deepseek 
- Supabase





### Reference: LangChain + Next.js Starter Template
Source Repo Reference: https://github.com/langchain-ai/langchain-nextjs-template