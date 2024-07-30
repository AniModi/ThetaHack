import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('AIzaSyBhFNMVvQpiN8up3tfTFP3MsGburA7D4PI');
export const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })