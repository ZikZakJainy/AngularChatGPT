import { Component } from '@angular/core';
// import {Configuration, OpenAIApi} from 'openai';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularchatgpt';
  // config = new Configuration({
  //   apiKey: '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'
  // })
  // openAi = new OpenAIApi(this.config);
  
  constructor() {
  //  this.myGPT()
  }

//  async myGPT() {
//   const response = await this.openAi.createCompletion({
//     model: 'text-davinci-003',
//     prompt: 'What is discharge summary?',
//     max_tokens: 3000,
//     temperature: 0,
//     top_p: 1,
//     frequency_penalty: 0.5,
//     presence_penalty: 0
//   });
//   const chatGptResponse = response.data.choices[0].text;
//   console.log('chatGptResponse ', chatGptResponse);
//  }
}
