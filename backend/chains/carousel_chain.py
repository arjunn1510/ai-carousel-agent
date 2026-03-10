from langchain_core.prompts import PromptTemplate
from services.llm_service import llm
from prompts.carousel_prompt import carousel_prompt

prompt = PromptTemplate(
    input_variables=["insights"],
    template=carousel_prompt
)

carousel_chain = prompt | llm