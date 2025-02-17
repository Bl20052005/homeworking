import json
from google import genai
from google.genai import types
from pydantic import BaseModel, TypeAdapter

client = genai.Client(api_key="AIzaSyBhkO27gd3ZbMRmSsC8X9EftkKhdNiBRFc")

class Hint(BaseModel):
  hint_1: str
  hint_2: str
  hint_3: str
  hint_4: str
  hint_5: str
  correctness: int

sys_instruct = """Ignore previous instructions. I will provide you with a question and possibly a user answer that you must analyze. Your response will be different
                  for the two scenarios of when an answer is or is not provided. In the first scenario when an answer is not provided,
                  you should not provide the answer immediately. You must consider the steps with which one will naturally derive the answer. 
                  You must respond with hint about these steps to help a person find the answer on their own. If 0% is no information and 100% is the full answer. 
                  Provide 5 hints. The first should amount to 20%. The second should amount to 40%. The third should amount to 60%. The fourth should amount to 80%. 
                  The fifth should amount to 100%. The different levels of hint should not represent steps in sequential order. 
                  Each hint must individually be meaningful without previous information. You should also provide a integer value based on how much the answer is correct, with 0 being completely wrong and 100 being completely right.
                  In this scenario, since no answer was provided, the integer value should always be 0.
                  In the second scenario when an answer is provided, you should perform a similar course of action but to help correct or analyze the answer instead of providing it.
                  You should also provide 5 hints of similar format that can help the user correct their answer and slowly derive the correct answer. In this case, the integer value
                  should reflect on how much the answer was correct based on the guidelines stated above. In the scenario where the answer is only partically correct or not complete, the 5 hints should progressively lead the user to a more accurate and complete response.
                  The format in which you will be given the question will be "QUESTION: <followed by whatever question it is>". The format in which you will be given the
                  answer will be "ANSWER: <followed by the user question>". DO NOT RESPOND until prompted with the command "RESPOND". If you receive the "RESPOND" command
                  before receiving an answer prompt, this indicates that you should follow the first scenario stated above. If you received both the question and the answer prompt
                  when the "RESPOND" command is given, you should follow the second scenario. If the response contain math equations, USE A LATEX FORMAT.
                  If you judge the question to be nonsensical or you are unsure of what the question states or means, ALL 5 hints should just be the word "NONSENSE".
                  """

def provide_response(input: tuple[str, str]) -> str:
  if input[1] == "":
    response = client.models.generate_content(model="gemini-2.0-flash", contents=["QUESTION: " + input[0], "RESPOND"], config=types.GenerateContentConfig(max_output_tokens=8192,temperature=0.1,system_instruction=sys_instruct, response_mime_type="application/json", response_schema=list[Hint]))
    return response.text

  else:
    response = client.models.generate_content(model="gemini-2.0-flash", contents=["QUESTION: " + input[0], "ANSWER: " + input[1], "RESPOND"], config=types.GenerateContentConfig(max_output_tokens=8192,temperature=0.1,system_instruction=sys_instruct, response_mime_type="application/json", response_schema=list[Hint]))
    return response.text
  
# print(provide_response(("Who composed the 1812 overture?", "")))
# print()
# print(provide_response(("Who composed the 1812 overture?", "Alexander Borodin")))
# print()
# print(provide_response(("Who composed the 1812 overture?", "Pyotr Ilyich Tchaikovsky")))


# print(provide_response(("(x+5)(x-2) = 40", "")))
# print()
# print(provide_response(("(x+5)(x-2) = 40", "x=2.4")))
# print()
# print(provide_response(("(x+5)(x-2) = 40", "x=5.72841, x=-8.72841")))
