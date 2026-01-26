import axios from "axios";
import { MessageFormData } from "../types/message";
import "dotenv/config";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const messagesApi = axios.create({
    baseURL: BASE_URL,
});

export async function sendMessage(message: MessageFormData) {
    const response = await messagesApi.post("/api/messages", message);
    return response.data;
}
