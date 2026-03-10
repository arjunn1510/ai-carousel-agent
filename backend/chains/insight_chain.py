from langchain_core.prompts import PromptTemplate
from services.llm_service import llm
from prompts.insight_prompt import INSIGHT_PROMPT

prompt = PromptTemplate(
    template=INSIGHT_PROMPT,
    input_variables=["transcript"]
)

insight_chain = prompt | llm