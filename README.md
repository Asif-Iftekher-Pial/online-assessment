# online-assessment
# live link - https://online-assesment-react.netlify.app/
Question - 
# Have you worked with any MCP (Model Context Protocol )?
I haven't worked with MCP directly in a production project yet, but I've researched it and I understand the concept well enough to see its value.
MCP (Model Context Protocol) is a standard that allows AI models like Claude to connect with external tools and services like databases, design tools, or browsers  in a structured way.
For this kind of project, I could see Supabase MCP being very useful. For example, Claude could directly query or update the database without manually writing API calls just by describing the intent. Similarly, Figma MCP could let an AI read design files and auto-generate components, which would speed up frontend work significantly.
I'm actively exploring this area and would be excited to work with it on a real project.

# Which AI tools or processes have you used or recommend to speed up frontend development?
- It depends on the problem i am facing , most of the time i use chat gpt and Claude Ai

# How would you handle offline mode if a candidate loses internet during this developed  exam project?
here is how i would approach - 
1. Save Answers Locally First
2. Detect Online/Offline Status
3. Auto-Sync When Reconnected
    When internet returns → automatically push saved answers to server
    Show candidate a "Synced confirmation" message
4. Timer Continues Locally
    Timer runs on frontend even offline
    On reconnect, validate with server time to prevent cheating