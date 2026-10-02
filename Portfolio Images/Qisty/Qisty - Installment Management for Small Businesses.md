# Qisty - Installment Management for Small Businesses

This is the First Android App I Built with the help of AI  
  
I've been using LLMs with agentic harnesses (such as Gemini CLI and Open Code) to develop web apps and websites such as tools for Yasir Stationers and Memorator, etc. But I was skeptical of the feasibility of these tools in the development of making Android apps. Sure, I could just wrap an already existing website in a WebView wrapper but I was trying to develop an app that could talk to the system directly and would natively interact with API exposed by Android itself. So when Misbah Kazim reached out to me to inquire whether it was possible for an Android app to be made to keep records of the installments, I had the same question, so I set out to test the limits of the harnesses I was already familiar with.  
  
So I first prompted the AI (Gemini 3.1 Pro) to develop this particular app in Kotlin but the UI was messed up and the functionality was also nowhere to be seen. Same was the case with Java. I was about to give up. I could have tried Claude within Antigravity but the absurd reduction in rate limits there could not let me move forward after the planning phase. AIs of today are really good at making projects in React and other notable JavaScript frameworks. I asked the AI whether it was possible to first create the working logic of the app in React and then port it over as an app? It suggested React Native. So I went with React Native and utilized the Expo framework for frontend and an SQLite database to keep the installment records of the customers since Misbah needed an app that he could use offline.  
  
After many (broken and frustrating) prompting sessions (due to heavy traffic in the Gemini CLI), Qisty emerged after 1 hour and 30 minutes of compilation. You can:  
  
1. Add customers from your phonebook.  
2. Add items with custom profit percentage. These items will be used to record installments and their subsequent collections.  
3. Send a receipt of the whole installments or just a specific collection to the customer.  
4. Send reminders for collection to the customers via WhatsApp or call them directly from the app.  
5. Backup and restore the data.  
6. See daily, weekly, monthly and yearly revenue and profits!  
  
The application is still in its early stages, and I have yet to add the basic features, such as sorting options for Items, Customers and Installments tabs and other quality of life improvments.  
  
You can view the project here on GitHub and you can grab the APK from the Releases section as well.  
  
Repo Link: [https://github.com/iasad12/qisty](https://github.com/iasad12/qisty)