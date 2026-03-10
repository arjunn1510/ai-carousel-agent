from langchain_google_genai import ChatGoogleGenerativeAI
from config import GOOGLE_API_KEYS

current_key_index = 0


def get_llm():

    global current_key_index

    key = GOOGLE_API_KEYS[current_key_index]

    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        google_api_key=key,
        temperature=0.7
    )

    return llm


def switch_key():

    global current_key_index

    if current_key_index < len(GOOGLE_API_KEYS) - 1:
        current_key_index += 1
        print(f"Switching to Gemini API key #{current_key_index + 1}")
    else:
        raise Exception("All Gemini API keys exhausted")


# default LLM
llm = get_llm()