from google import genai

client = genai.Client(api_key="AIzaSyCjvIn5DnNMCX6U4MFOl_kkh3iuD7C0i4Y")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explain how AI works in a few words"
)
print(response.text)