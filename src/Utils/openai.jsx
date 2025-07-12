import OpenAI from 'openai';
import { Groq_Key} from './Constants';

const client = new OpenAI({
    apiKey: Groq_Key, // This is the default and can be omitted
    // dangerouslyAllowBrowser:true,
});

export default client;
