---
id: 2
title: "An introduction to Generative Artificial Intelligence (Gen AI)"
slug: "an-introduction-to-generative-ai"
description: "In this blog, we'll take a closer look at Generative Artificial Intelligence (Gen AI), explore its applications, rise, and examine how branches of AI come together."
published: true
posted: "March 16, 2025"
authorSlug: "anish-ghimire"
banner: "/img/ai-introduction/generative-ai-introduction-banner.png"
bannerAlt: "An Introduction to Generative Artificial Intelligence (Gen AI) Banner"
tags: ["ai"]
---

In our [previous blog](https://sarvalekh.com/blog/an-introduction-to-artificial-intelligence), we discussed the introduction to Artificial Intelligence, AI’s brief history, types, branches, and examined how the different branches of AI work together through a real-world example of virtual assistants like Siri and Alexa.

We'll cover the following topics in this blog:

- <a href="#what-is-generative-ai-gen-ai" target="_self">Introduction to Generative AI</a>
- <a href="#the-rise-of-generative-ai-gen-ai" target="_self">The Rise of Generative AI</a>
- <a href="#transformer" target="_self">The Transformer Architecture</a>
- <a href="#how-does-generative-ai-gen-ai-work" target="_self">How does Generative AI work?</a>
- <a href="#how-machine-learning-ml-neural-networks-nns-and-natural-language-processing-nlp-work-together-with-generative-ai" target="_self">How different branches of AI work together with Generative AI</a>

## What is Generative AI (Gen AI)?

[Generative AI](https://research.ibm.com/blog/what-is-generative-AI) or Gen AI is a branch of AI that is focused on generating content. It can generate content like text, images, code, audio, video, and more for a given prompt. Gen AI generates content based on patterns it has learned from large datasets.

Gen AI has various applications across different domains. Text generation is one of the key applications of Gen AI. The following are some other important applications of Gen AI:

- Text Generation
- Image Generation
- Video Generation
- Code Generation
- Music and Audio Generation
- 3D Model Generation
- AI-Powered Chatbots
- AI-Powered Writing and Design Tools

## The Rise of Generative AI (Gen AI)

The biggest breakthrough of Generative AI can be attributed to the research paper [Attention is All You Need](https://arxiv.org/abs/1706.03762), introduced in 2017 by Google scholars. They proposed a new simple network architecture, the Transformer.

Besides the new architecture, the availability of large datasets, improved computing power, corporate funding, and businesses finding profitable and practical use cases have all contributed to the rise and explosive growth of Gen AI in recent years.

## Transformer

A [transformer](https://huggingface.co/learn/nlp-course/en/chapter1/4) is a deep learning model architecture that allows processing entire sequences of text in parallel, which makes them more efficient than previous architectures like RNNs and LSTMs. GPT-3, GPT-4, BERT, and DALL-E are all built on transformer models.

The self-attention mechanism allows the model to focus on relevant words in a sentence, regardless of their position.

In the sentence “The cat sat on the mat because it was comfortable,” a traditional model struggles to understand that “it” refers to “the mat,” but a Transformer assigns attention scores to different words, helping it understand relationships more effectively.

## How does Generative AI (Gen AI) work?

Gen AI generates new content by learning patterns from large amounts of data. Gen AI goes through two training phases:

### Pre-training

The Gen AI model is trained on large datasets.

### Fine-tuning

After pre-training, the model is refined using domain-specific datasets and human feedback.
ChatGPT was fine-tuned with Reinforcement Learning from Human Feedback (RLHF) to provide more human-like responses.

Once trained, the AI processes user prompts, applies its learned knowledge, and, using Transformer architecture, generates new text, images, or code in real time.

## How Machine Learning (ML), Neural Networks (NNs), and Natural Language Processing (NLP) Work Together with Generative AI

Gen AI relies on other branches of AI, such as Machine Learning (ML), Neural Networks (NNs), and Natural Language Processing (NLP), to function.

![Example of Generative AI's working flow](/img/ai-introduction/generative-ai-working-flow-example.png)

### Machine Learning (ML)

Gen AI models are trained using machine learning models to learn patterns from large datasets in order to create meaningful content.

It learns patterns, grammars, and how words are structured to generate a response.

### Neural Networks (NNs)

Gen AI uses neural networks, particularly deep learning, to identify patterns, interpret data, and make decisions.

Large language models like GPT-4 use transformers to process input and predict the next best word based on its training.

### Natural Language Processing (NLP)

Gen AI uses natural language processing to understand and structure language.

NLP techniques help the model understand the intent behind the user’s prompt, understand the structure of the language, grammar, meaning, and generate relevant, grammatically correct, and human-like responses.

To summarize, machine learning helps the model learn from a large dataset, neural networks help process the prompt and generate content, and natural language processing ensures language understanding and structure.

That's all for this blog! I hope you found it helpful as you begin your journey into Gen AI. We’ll be back soon with more content, so stay tuned!
