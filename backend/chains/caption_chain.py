from langchain_core.prompts import PromptTemplate
from backend.services.llm_service import llm

prompt = PromptTemplate(
    template="""
Write an Instagram caption based on this carousel.

Carousel:
{carousel}

Include relevant hashtags.
""",
    input_variables=["carousel"]
)

caption_chain = prompt | llm