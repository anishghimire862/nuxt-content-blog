---
id: 3
title: "AI Agents - Introduction and Customer Support AI Agent Example"
slug: "ai-agents-introduction-and-implementation"
description: "In this blog, we'll discuss AI Agents and implement a Customer Support AI Agent with a custom knowledge base using Ollama and NodeJS."
published: true
posted: "March 20, 2025"
author: "anish-ghimire"
banner: "/img/ai-introduction/ai-agents-introduction-banner.png"
bannerAlt: "AI Agents - Introduction and Example"
---

[Artificial Intelligence](https://sarvalekh.com/blog/an-introduction-to-artificial-intelligence) is growing at a very fast pace. The surge in transformer-based models like [GPT](https://openai.com/index/gpt-4/), [Qwen](https://qwen.readthedocs.io/en/latest/) and [Gemini](https://gemini.google.com/), along with open-source innovations, has accelerated advancements in generative AI much faster than in other branches of AI.

# What is an AI Agent?

An Artificial Intelligence (AI) [Agent](https://github.com/resources/articles/ai/what-are-ai-agents) is a software program that can perceive its environment, make decisions, and autonomously perform tasks to achieve predefined or dynamic goals.

## Types of AI Agents

AI agents can be categorized into four [types](https://www.digitalocean.com/resources/articles/types-of-ai-agents#types-of-ai-agents):

### Reactive Agents

Reactive agents react to immediate stimuli without memory of past interactions. Examples include autonomous vacuum cleaners and traffic light systems that change based on a set timer.

### Goal-Based Agents

Goal-based agents plan actions to achieve specific goals. They modify their strategies as needed to reach their desired outcome. Autonomous vehicles, game-playing agents, etc., are examples of goal-based agents.

### Utility-Based Agents

Utility-based agents aim to maximize overall utility or value. They seek to optimize their performance. A self-driving car can be an example of a utility-based agent if it makes decisions that reduce travel time and fuel consumption.

### Learning Agents

Learning agents learn from their environment and improve their performance through interaction. Learning agents are not explicitly programmed to handle every scenario.

Recommendation systems, such as those of Netflix and YouTube, are examples of learning agents. They learn from user behavior and adapt to changes over time.

# Connection of AI Agents with Generative AI (Gen AI)

Before diving deeper into agentic AI or AI agents, let's first understand their connection with [Generative AI](https://sarvalekh.com/blog/an-introduction-to-generative-ai) (Gen AI).

Generative AI primarily refers to AI models that generate new content based on a given prompt and their training data. AI agents go beyond Gen AI by making decisions and taking actions autonomously.

AI agents leverage Gen AI models for intelligence and utilize external tools such as APIs, databases, and other automation systems to complete tasks.

# Why are AI Agents required?

AI agents help bridge the gap between what an LLM has been trained on and the domain-specific knowledge required to solve a particular type of problem.

- Custom Knowledge Access: An AI agent can be equipped with a custom knowledge base.
- Tool Integration: AI agents can automate tasks beyond text generation, such as querying databases and retrieving real-time data.

AI agents are required when the system needs to be adaptable, configurable, contextually aware, capable of accessing domain-specific knowledge, and able to perform or automate certain tasks.

# An Example of AI Agent In Customer Support

Consider a customer support AI Agent with its own knowledge base. For queries, the agent first checks its knowledge base. If relevant resources are found, the information is passed on to the LLM (like Qwen or Gemini) to generate a response.

In cases where there is no relevant information in the knowledge base, the AI agent responds using the LLM based solely on what it has been trained on.

In the above example, the AI agent is making the decision to use different methods (its own knowledge base or LLM) based on the information it has, which is a key characteristic of an AI agent - it takes actions autonomously to complete a task.

# Customer Support AI Agent Implementation with NodeJS and Ollama

Theory can be boring, so without wasting much time, let's jump straight into a demo project.

In this project, we will set up an intelligent customer support agent with its custom knowledge base, which will be responsible for assisting users with support-related tasks.

For demonstration purposes, we’ll set up a NodeJS project and store the knowledge base in a JSON file. We'll use the Qwen2.5 LLM model through Ollama.

The NodeJS program serves as the middleware between the AI model and the end user.

The below-mentioned knowledge.json file is an example of a knowledge base for the demonstration in this blog.

```json
{
  ...,
  "Change Password": "To change your password, please navigate to https://sarvalekh.com/change-password",
  "Activate Account": "To activate your account, you need to upload an identity card by navigating to https://sarvalekh.com/activate"
}
```

The knowledge base can come in various formats, such as a site's FAQs, databases, images, audio, video, PDFs, and more. Since LLMs are primarily designed to work with text-based data, additional processing steps are required when the knowledge base is not in text format.

We first read the content of the knowledge base from the `knowledge.json` file. The knowledge base contains domain-specific information that is generally not included in the training data of an LLM or may not be available on the internet.

```javascript
let knowledgeBase = {};
fs.readFile("knowledge.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading knowledge base:", err);
  } else {
    knowledgeBase = JSON.parse(data);
  }
});
```

Once the knowledge base is loaded, we handle user queries and interact with the Ollama API.

```javascript
async function runQuery(query) {
  const knowledgeContent = JSON.stringify(knowledgeBase);
  const prompt = `
  You are an intelligent customer support agent. Your goal is to assist users by providing accurate, clear, and concise answers based on the knowledge base you have access to.

  Here is the knowledge base:
  ${knowledgeContent}

  Use this knowledge to answer the user's query as accurately as possible. If the query is unclear or there is no direct answer in the knowledge base, inform the user politely and suggest alternatives or ask for clarification.

  The user has asked: "${query}"

  Please provide a helpful response.
  `;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "qwen2.5",
      prompt: prompt,
      temperature: 0.7,
      stream: false,
    });

    return response.data?.response || "Answer not found.";
  } catch (error) {
    console.error("Error querying Ollama:", error);
    return "Sorry, there was an error processing your request.";
  }
}
```

The knowledge base is converted into string format and included in the prompt. The prompt guides the LLM to act as a customer support agent and use the knowledge base to answer the user’s query.

Once the model completes processing the query and a response is generated, we return the generated response.

We’ve come to the final part of the code, where we will set up the `(/query)` API endpoint that listens for POST requests, processes the user's query, and then returns the response from the LLM to the user.

```javascript
app.post("/query", async (req, res) => {
  const query = req.body.query.trim();

  const response = await runQuery(query);
  res.json({ response });
});
```

When a POST request is sent to the `(/query)` endpoint with `I am unable to activate my account` the agent responds with a reply generated using the domain-specific knowledge base.

```bash
curl -X POST http://localhost:3000/query \
     -H "Content-Type: application/json" \
     -d '{"query": "I am unable to activate my account.."}'
```

![Customer Support Agent Demo using Ollama and NodeJS](/img/ai-introduction/customer-support-agent-demo.png)

The source code for the demo project can be found [here](https://github.com/anishghimire862/ai-agent-example).

With this, we’ve come to the end of the blog. We demonstrated a basic customer support agent using Ollama and NodeJS. The possibilities are unlimited, but this should serve as a good starting point for anyone wanting to learn about Artificial Intelligence.
