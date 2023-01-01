import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Configuration, OpenAIApi } from 'openai';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: 'auto',
          height: 'auto',
        })
      ),
      state(
        'closed',
        style({
          width: '0',
          height: '0',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class ChatGptComponent {
  isOpen = false;

  messages: any[] = [
    {
      type: 'query',
      text: `
        What is discharge summary?
      `,
    },
    {
      type: 'response',
      text: `
        A discharge summary is a document which provides a record of the patient's medical care and treatment at a hospital or medical facility. It includes detailed information about the patient's diagnosis, treatments, medications, hospital course, discharge plan, and follow-up instructions. Discharge summaries are typically prepared by the attending physician or other medical professionals directly responsible for the care of the patient.
      `,
    },
  ];
  newMessageText: string = '';

  config = new Configuration({
    apiKey: 'YOUR_API_KEY_HERE',
  });
  openAi = new OpenAIApi(this.config);
  waitingForResponse: boolean = false;

  sendMessage() {
    this.messages.push({ type: 'query', text: this.newMessageText });
    const userQuery = this.newMessageText;
    this.newMessageText = '';
    // Send the message to the server and clear the input field
    this.myGPT(userQuery).then(() => {});
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  async myGPT(userQuery: string) {
    this.waitingForResponse = true;
    const response = await this.openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: userQuery,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
    });
    const chatGptResponse = response.data.choices[0].text;
    this.messages.push({ type: 'response', text: chatGptResponse });
    this.waitingForResponse = false;
    console.log('chatGptResponse ', chatGptResponse);
  }
}
