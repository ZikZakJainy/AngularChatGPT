## Intro

This project is a simple Angular demo project with [ChatGPT](https://openai.com/blog/chatgpt) by [OpenAI](https://openai.com). TS batteries included. ✨

You can use it to start building projects powered by ChatGPT like chatbots, websites, etc...
# NgChatGpt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Install

```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

> **Note**
> Per the official OpenAI Discord on December 7th, 2022: The ChatGPT servers are currently experiencing "exceptionally high demand," so some requests may respond with [HTTP 503 errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503).

```ts
import { ChatGPTAPI } from 'chatgpt'

import {Configuration, OpenAIApi} from 'openai';

    config = new Configuration({
      apiKey: 'YOUR_API_KEY_HERE'
    })
    openAi = new OpenAIApi(this.config);
    
    async example() {
        const response = await this.openAi.createCompletion({
        model: 'text-davinci-003',
        prompt: userQuery,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6
        });
        const chatGptResponse = response.data.choices[0].text;
        return chatGptResponse;
    }
```

Sometimes, ChatGPT will hang for an extended period of time before beginning to respond. This may be due to rate limiting or it may be due to OpenAI's servers being overloaded.

To mitigate these issues, you can add a timeout like this:

```ts
// timeout after 2 minutes (which will also abort the underlying HTTP request)
const response = await api.sendMessage('this is a timeout test', {
  timeoutMs: 2 * 60 * 1000
})
```

## Credits
- Huge thanks to JavaScript Mastery (https://youtu.be/2FeymQoKvrk)
- [OpenAI](https://openai.com) for creating [ChatGPT](https://openai.com/blog/chatgpt/) 

